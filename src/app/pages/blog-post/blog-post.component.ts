import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost, BlogService } from 'src/app/services/blog.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  private post_id!: string;
  loading = true;
  post?: BlogPost | null;
  error = false;

  constructor(
    private seoService: SeoService,
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute) { }

  private loadPost() {
    delete this.post;
    this.loading = true;
    this.error = false;
    this.blogService.getPost(this.post_id)
      .then(post => {
        this.post = post;
        if(post) {
          this.seoService.updateMetadata({
            title: post.title,
            description: post.description,
            image: 'https://broadbandhub.us/assets/images/logos/logo-landscape-light-theme.svg'
          })
        }
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const post_id = params['post_id'];
      if(post_id !== this.post_id) {
        this.post_id = params['post_id'];
        this.loadPost();
      }
    })
  }

}
