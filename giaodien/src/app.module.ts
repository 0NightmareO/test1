import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSlider,  } from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { NewsListContentComponent } from './app/components/news-list-content/news-list-content.component';
import { EditPostComponent } from './app/components/edit-post/edit-post.component';
import { EditProfileContentComponent } from './app/components/edit-profile-content/edit-profile-content.component';
import { ChangePasswordContentComponent } from './app/components/change-password-content/change-password-content.component';
import { RegisterOwnerContentComponent } from './app/components/register-owner-content/register-owner-content.component';
import { FindRoommateComponent } from './app/components/find-roommate/find-roommate.component';
import { HomepageComponent } from './app/components/homepage/homepage.component';
import { NewsComponent } from './app/components/news/news.component';
import { FilterNewsComponent } from './app/components/filter-news/filter-news.component';
import { CapitalizeFirstLetterPipe } from './app/pipe/capitalize-first-letter.pipe';
import { ApproveLandlordApplicationComponent } from './app/components/approve-landlord-application/approve-landlord-application/approve-landlord-application.component';
import { EditUserComponent } from './app/components/edit-user/edit-user/edit-user.component';
import { HistoryComponent } from './app/components/history/history.component';
import { MenuComponent } from './app/components/menu/menu.component';
import { NavbarUserComponent } from './app/components/navbar-user/navbar-user.component';
import { PostManagementComponent } from './app/components/post-management/post-management.component';
import { RegisterComponent } from './app/components/register/register.component';
import { RentRoomComponent } from './app/components/rent-room/rent-room.component';
import { RoomDetailComponent } from './app/components/room-detail/room-detail.component';
import { RoommateSearchDetailComponent } from './app/components/roommate-search-detail/roommate-search-detail.component';
import { UiAdminComponent } from './app/components/ui-admin/ui-admin.component';
import { UiUserComponent } from './app/components/ui-user/ui-user.component';
import { UserListComponent } from './app/components/user-list/user-list.component';
import { ListFavoritePostComponent } from './app/components/list-favorite-post/list-favorite-post.component';






@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NewsListContentComponent,
    AppComponent,
    EditPostComponent,
    EditProfileContentComponent,
    ChangePasswordContentComponent,
    RegisterOwnerContentComponent,
    FindRoommateComponent,
    HomepageComponent,
    NewsComponent,
    FilterNewsComponent,
    CapitalizeFirstLetterPipe,
    ApproveLandlordApplicationComponent,
    EditUserComponent,
    HistoryComponent,
    MenuComponent,
    NavbarUserComponent,
    PostManagementComponent,
    RegisterComponent,
    RentRoomComponent,
    RoomDetailComponent,
    RoommateSearchDetailComponent,
    UiAdminComponent,
    UiUserComponent,
    UserListComponent,
    ListFavoritePostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    MatSliderModule
   
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
