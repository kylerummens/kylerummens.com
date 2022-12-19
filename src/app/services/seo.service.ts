import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title, 
    private meta: Meta, 
    private router: Router) { }

  updateMetadata({ title = '', description = '', image = '' }) {
    this.title.setTitle(title);
    this.meta.addTags([
      // General
      { name: 'title', content: title },
      { name: 'description', content: description },
      // Open Graph
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: `https://kylerummens.com${this.router.url}` },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: image },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: `https://kylerummens.com${this.router.url}` },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ]);
  }
}
