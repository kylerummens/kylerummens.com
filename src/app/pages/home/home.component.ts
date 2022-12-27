import { Component, OnInit } from '@angular/core';
import { BlogPost, BlogService } from 'src/app/services/blog.service';
import { GithubCodeProject, GithubContributions, GithubService, IGithubCodeProject } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blog_posts?: BlogPost[];
  contributions?: GithubContributions;
  code_projects?: GithubCodeProject[];

  private _code_projects: IGithubCodeProject[] = [
    { name: 'angular-supabase-auth', url: 'angular-supabase-auth/main/src/app/services/auth.service.ts', file_name: 'auth.service.ts', language: 'typescript' },
    { name: 'kylerummens.com', url: 'kylerummens.com/main/server/services/github.service.ts', file_name: ' github.service.ts', language: 'javascript' },
    { name: 'angular-supabase-auth', url: 'angular-supabase-auth/main/src/app/guards/profile.guard.ts', file_name: 'profile.guard.ts', language: 'javascript' },
  ]

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

  private initGithubCodeProjects() {
    this.githubService.getCodeProjects(this._code_projects).then(code_projects => {
      this.code_projects = code_projects;
    })
  }

  ngOnInit(): void {
    this.initGithubContributions();
    this.initBlogPosts();
    this.initGithubCodeProjects();
  }

}
