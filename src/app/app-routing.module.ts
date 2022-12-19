import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CodeComponent } from './pages/code/code.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'code', component: CodeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:post_id', component: BlogPostComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
