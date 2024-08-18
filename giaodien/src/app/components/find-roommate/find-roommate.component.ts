import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location/location.service';
import { FormSubmissionService } from '../../services/find-roommate/form-submission.service';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { TokenStoreService } from '../../services/token-store.service';

interface Location {
  Id: string;
  Name: string;
  Districts: District[];
}

interface District {
  Id: string;
  Name: string;
  Wards: Ward[];
}

interface Ward {
  Id: string;
  Name: string;
}
interface Content {
  Id: string;
  title: string;
  price: number;
  description: string;
  acreage: number;
  images: string;
  contact: string;
  address: string;
}
@Component({
  selector: 'app-find-roommate',
  templateUrl: './find-roommate.component.html',
  styleUrls: ['./find-roommate.component.css'],
})

export class FindRoommateComponent implements OnInit {
  userId = null;
  contact_name = "null";
  provinces: Location[] = [];
  districts: District[] = [];
  wards: Ward[] = [];
  full_address: string = "";
  preview_images: string[] = [];
  selected_files: File[] = [];
  contents: Content[] = [];
  category: {id:Number,name:string}[]=[]
  form!: FormGroup;
  new_content: Content = {
    Id: '',
    title: '',
    price: 0,
    description: '',
    acreage: 0,
    images: '',
    contact: '',
    address: ''
  };
    // Nút chuyển qua lại giữa tìm người và cho thuê
    isForRent: boolean = false;

    toggleForRent() {
      this.isForRent = !this.isForRent;
    }

  constructor(
    private locationService: LocationService,
    private contentService: FormSubmissionService,
    private http: HttpClient,
    private _api : ApiService,
    private _token : TokenStoreService
      
    
  ) {}

  ngOnInit(): void {
    const {userId, name} = this._token.getUser();
    this.userId =userId;
    this.contact_name = name;
    this.locationService.getLocations().subscribe(data => {
      this.provinces = data;
    });
  this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', Validators.required),
      acreage: new FormControl(0, [Validators.required, Validators.min(0)]),
      contact: new FormControl( '',Validators.required),
      category: new FormControl({
        name: new FormControl('Phòng trọ')
      }),
      address: new FormGroup({
        province: new FormControl('', Validators.required),
        district: new FormControl('', Validators.required),
        ward: new FormControl('', Validators.required),
        detail: new FormControl('', Validators.required),
      }),

      images: new FormControl(null, Validators.required),
    });
   

    // this.form = new FormGroup({
    //   title: new FormControl('', Validators.required),
    //   price: new FormControl(0, [Validators.required, Validators.min(0)]),
    //   description: new FormControl('', Validators.required),
    //   acreage: new FormControl(0, [Validators.required, Validators.min(0)]),
    //   contact: new FormControl(36528, Validators.required),
    //   category: new FormControl('Phòng trọ', Validators.required),
    //   address: new FormGroup({
    //     province: new FormControl('', Validators.required),
    //     district: new FormControl('', Validators.required),
    //     ward: new FormControl('', Validators.required),
    //     detail: new FormControl('', Validators.required),
    //   }),

    //   images: new FormControl(null, Validators.required),
    // });

    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.form.setValue(JSON.parse(savedData));
    }
  }
  // getContact_name (): void {
  //   this.contentService.getContact_name().subscribe(
  //     ( Response: any)=> {
  //       this.getContact_name = Response.user.name;

  //     }, (Error) => {
  //       alert("Contact_name not found")
  //     }
  //   )
  // } // lấy thông tin bài viết
  onProvinceChange(): void {
    const provinceId = this.form.get('address.province')?.value || '';
    this.districts = this.getSubLocations(provinceId, this.provinces, 'Districts');
    this.wards = [];
    this.form.get('address.district')?.reset();
    this.form.get('address.ward')?.reset();
    this.form.get('address.detail')?.reset(); 
    this.updateFull_address();
  }

  onDistrictChange(): void {
    const districtId = this.form.get('address.district')?.value || '';
    this.wards = this.getSubLocations(districtId, this.districts, 'Wards');
    this.form.get('address.ward')?.reset();
    this.form.get('address.detail')?.reset();
   
    this.updateFull_address();
  }

  private getSubLocations(id: string, locations: any[], subLocationKey: string): any[] {
    if (!id) return [];
    const selectedLocation = locations.find(location => location.Id === id);
    return selectedLocation ? selectedLocation[subLocationKey] : [];
  }

  updateFull_address(): void {
    const selectedProvinceId = this.form.get('address.province')?.value || '';
    const selectedDistrictId = this.form.get('address.district')?.value || '';
    const selectedWardId = this.form.get('address.ward')?.value || '';
    const detail = this.form.get('address.detail')?.value || '';

    const provinceName = this.provinces.find(province => province.Id === selectedProvinceId)?.Name || '';
    const districtName = this.districts.find(district => district.Id === selectedDistrictId)?.Name || '';
    const wardName = this.wards.find(ward => ward.Id === selectedWardId)?.Name || '';

    this.full_address = ` ${detail}, ${wardName}, ${districtName}, ${provinceName}`.replace(/(^\s*,)|(,\s*$)/g, '');
    this.full_address = this.capitalizeFirstLetter(this.full_address);
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files: FileList | null = input.files;

    if (files && files.length) {
      this.form.get('images')?.setValue(files); // Cập nhật giá trị của control images

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.size > 15 * 1024 * 1024) {
          alert('Kích thước ảnh quá lớn. Vui lòng chọn ảnh nhỏ hơn 15MB.');
          continue;
        }

        this.selected_files.push(file);

        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.preview_images.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      console.error('No files selected or invalid input');
    }
  }

  onSelectImage() {
    const inputElement = document.getElementById('imageUpload') as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    } else {
      console.error('Input element not found!');
    }
  }

  removeImage(index: number) {
    this.preview_images.splice(index, 1);
    this.selected_files.splice(index, 1);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.form.markAllAsTouched();
      
      // Kiểm tra từng trường con của FormGroup 'address'
      const addressControl = this.form.get('address') as FormGroup;
      if (addressControl) {
        Object.keys(addressControl.controls).forEach(key => {
          const control = addressControl.get(key);
          if (control && control.invalid) {
            console.log(`${key} is invalid`);
          }
        });
      }
      if (this.preview_images.length < 6) {
        alert('Vui lòng thêm ít nhất 6 ảnh.');
        return;
      }
      
      const formData = new FormData();

      // Thêm dữ liệu từ form vào formData
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        if (control) {
          if (control instanceof FormGroup) {
            Object.keys(control.controls).forEach(subKey => {
              formData.append(`address[${subKey}]`, control.get(subKey)?.value);
            });
          } else {
            formData.append(key, control.value);
          }
        }
      });
      

      this.selected_files.forEach((file) => {
        formData.append('Files', file, file.name);
      });

      formData.forEach((value, key) => {
        console.log(key, value);
      });

      this.contentService.addContent(formData).subscribe(
        (res: Content) => {
          this.contents.push(res);
          this.new_content = {
            Id: '',
            title: '',
            price: 0,
            description: '',
            acreage: 0,
            images: '',
            contact: '',
            address: ''
          };
          alert('Thêm thành công');
          window.location.reload();
        },
        (error) => {
          console.error('Lỗi khi thêm nội dung', error);
        }
      );
    }
  }

  capitalizeFirstLetter(value: string): string {
    if (!value) {
      return '';
    }
    return value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}