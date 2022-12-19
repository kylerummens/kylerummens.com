import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SupabaseService } from './supabase.service';

export interface IBlogPost {
  title: string;
  description: string;
  content: string;
  published: boolean;
}

export interface BlogPost extends IBlogPost {
  id: string;
  created_at: Date;
  updated_at?: Date;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getPosts(page: number): Promise<BlogPost[]> {
    return firstValueFrom(this.httpClient.get<BlogPost[]>('/api/blog-posts'));
  }

  getPost(post_id: string): Promise<BlogPost | null> {
    return firstValueFrom(this.httpClient.get<BlogPost | null>('/api/blog-posts/' + post_id));
  }

}
