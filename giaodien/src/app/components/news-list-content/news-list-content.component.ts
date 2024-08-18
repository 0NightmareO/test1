import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewListContentService } from '../../services/new-list-content/new-list-content.service';

@Component({
  selector: 'app-news-list-content',
  templateUrl: './news-list-content.component.html',
  styleUrls: ['./news-list-content.component.css']
})
export class NewsListContentComponent implements OnInit {
  data: any; // Biến để lưu trữ dữ liệu nhận từ API

  constructor(
    private dataService: NewListContentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      console.log('Dữ liệu từ API:', this.data); // Kiểm tra dữ liệu trong console
    });
  }

  hideItem(cardId: number) {
    const card = this.data.find((c: any) => c.id === cardId);
    if (card) {
      card.isHidden = true;
      card.status = 'Đã ẩn';
    }
  }

  editItem(cardId: number) {
    this.router.navigate(['/edit-post', cardId]); 
  }

  repostItem(cardId: number) {
    const card = this.data.find((c: any) => c.id === cardId);
    if (card) {
      this.router.navigate(['/new-page']);
    }
  }

  searchText: string = '';

  onSearchClick() {
    console.log('Searching for:', this.searchText);
  }
}
