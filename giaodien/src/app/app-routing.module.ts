import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindRoommateComponent } from './components/find-roommate/find-roommate.component';
import { EditProfileContentComponent } from './components/edit-profile-content/edit-profile-content.component';
import { RegisterOwnerContentComponent } from './components/register-owner-content/register-owner-content.component';
import { ChangePasswordContentComponent } from './components/change-password-content/change-password-content.component';
import { NewsListContentComponent } from './components/news-list-content/news-list-content.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const routes: Routes = [
  { path: 'post-for-roommate', component: FindRoommateComponent },
  { path: 'news-list', component: NewsListContentComponent },
  { path: 'edit-profile', component: EditProfileContentComponent },
  { path: 'change-password', component: ChangePasswordContentComponent },
  { path: 'register-owner', component: RegisterOwnerContentComponent },
  { path: 'home', component: HomepageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
