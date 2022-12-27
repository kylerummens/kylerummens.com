import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TransferHttpCacheModule } from '@ngUniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CodeComponent } from './pages/code/code.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { HttpClientModule } from '@angular/common/http';
import { UniversalInterceptorService } from './interceptors/universal.interceptor';
import { PrismDirective } from './directives/prism.directive';

import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    CodeComponent,
    HobbiesComponent,
    ContactComponent,
    BlogPostComponent,
    PrismDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    TransferHttpCacheModule,
  ],
  providers: [
    UniversalInterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
