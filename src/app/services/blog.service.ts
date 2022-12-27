import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { Converter } from 'showdown';

export interface IBlogPost {
  title: string;
  description: string;
  content: string;
  published: boolean;
}

export interface BlogPost extends IBlogPost {
  idd: string;
  created_at: Date;
  updated_at?: Date;
  published_at?: Date;
  active: boolean;
  views: number;
  author: {
    id: string;
    name: string;
    photo_url: string;
    title: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly converter = new Converter();

  constructor(
    private sanitizer: DomSanitizer,
    private httpClient: HttpClient) { }

  getPosts(page: number = 0): Promise<BlogPost[]> {
    return firstValueFrom(this.httpClient.get<BlogPost[]>('/api/blog-posts'));
  }

  getPost(post_id: string): Promise<BlogPost | null> {
    return firstValueFrom(this.httpClient.get<BlogPost | null>('/api/blog-posts/' + post_id));
  }

  markdownToHtml(markdown: string) {
    return this.sanitizer.bypassSecurityTrustHtml(this.converter.makeHtml(markdown));
  }

}
