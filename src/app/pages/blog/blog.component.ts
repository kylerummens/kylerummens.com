import { Component, OnInit } from '@angular/core';
import { BlogPost, BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  _posts = new Map<number, BlogPost[]>();
  page = 0;

  constructor(private blogService: BlogService) { }

  getPagePosts() {
    return this._posts.get(this.page);
  }

  private onPageChange() {
    if (!this._posts.has(this.page)) {
      this.blogService.getPosts(this.page).then(posts => {
        this._posts.set(this.page, posts);
      })
    }
  }

  ngOnInit(): void {
    this.onPageChange();
  }

}
