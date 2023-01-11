import { Component, OnInit } from '@angular/core';
import { BlogPost, BlogService } from 'src/app/services/blog.service';
import { GithubContributions, GithubService } from 'src/app/services/github.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blog_posts?: BlogPost[];
  contributions?: GithubContributions;
  code_links: { link: string, title: string, description: string }[] = [
    {
      link: 'https://www.npmjs.com/package/kml-to-geojson',
      title: 'kml-to-geojson',
      description: 'Convert KML content to GeoJSON, preserving style and folder data'
    },
    {
      link: 'https://github.com/kylerummens/angular-supabase-auth',
      title: 'Angular Supabase Auth',
      description: 'Full code example using Supabase Auth, Database, and Realtime to manage authentication in Angular'
    },
    {
      link: 'https://github.com/kylerummens/kylerummens.com',
      title: 'kylerummens.com',
      description: 'Source code for my personal website, written in Typescript using Angular Universal'
    },
    {
      link: 'https://github.com/kylerummens/kml-to-geojson',
      title: 'kml-to-geojson',
      description: 'Source code for the npm package kml-to-geojson, written in Typescript'
    }
  ]

  constructor(
    private seoService: SeoService,
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

  getCodeLinkImage(link: string) {
    const base_url = this.getCodeLinkBaseUrl(link);

    if (base_url === 'github.com') {
      return '/assets/github.png';
    }
    else if (base_url === 'npmjs.com') {
      return '/assets/npm.png';
    }
    return '';
  }

  getCodeLinkBaseUrl(link: string) {
    return link.replace('https://', '').replace('http://', '').split('/')[0].replace('www.', '');
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
    this.seoService.updateMetadata({
      title: 'kylerummens.com',
      description: `I'm a software engineer, rock climber, wannabe pilot, and recovering Dr.Pepper addict`,
      image: '/assets/kylerummens.png'
    });
    this.initGithubContributions();
    this.initBlogPosts();
  }

}
