import { Component, OnInit } from '@angular/core';
import { BlogPost, BlogService } from 'src/app/services/blog.service';
import { GithubContributions, GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blog_posts?: BlogPost[];
  contributions?: GithubContributions;

  constructor(
    private blogService: BlogService,
    private githubService: GithubService) { }

  getGithubGraphLevelClass(level: number) {
    if (level === 0) {
      return 'bg-github-graph-l0 dark:bg-github-graph-night-l0';
    }
    else if (level === 1) {
      return 'bg-github-graph-l1 dark:bg-github-graph-night-l1';
    }
    else if (level === 2) {
      return 'bg-github-graph-l2 dark:bg-github-graph-night-l2';
    }
    else if (level === 3) {
      return 'bg-github-graph-l3 dark:bg-github-graph-night-l3';
    }
    else if (level === 4) {
      return 'bg-github-graph-l4 dark:bg-github-graph-night-l4';
    }
    else {
      return 'bg-github-graph-l0 dark:bg-github-graph-night-l0'
    }
  }

  private initBlogPosts() {
    this.blogService.getPosts().then(posts => {
      this.blog_posts = posts;
    })
  }

  private initGithubContributions() {
    this.githubService.getContributions().then(contributions => {
      this.contributions = contributions;
    });
  }

  ngOnInit(): void {
    this.initGithubContributions();
    this.initBlogPosts();
  }

}
