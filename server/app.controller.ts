import { Controller, Get, Header, InternalServerErrorException, Param, Query } from '@nestjs/common';
import { GithubService } from './services/github.service';
import { SupabaseService } from './services/supabase.service';

@Controller()
export class AppController {

    constructor(
        private githubService: GithubService,
        private supabase: SupabaseService) { }

    @Get()
    handleRoot() {
        return { status: 'success', message: 'The backend is running.' };
    }

    @Get('blog-posts')
    handleGetBlogPosts(@Query('page') page: number = 0) {
        const PAGE_SIZE = 10;

        return this.supabase.client
            .from('blog_posts')
            .select('*')
            .order('published_at', { ascending: false })
            .range((page * PAGE_SIZE), (page * PAGE_SIZE + PAGE_SIZE - 1))
            .throwOnError()
            .then(res => {
                return res.data ?? [];
            })
    }

    @Get('blog-posts/:post_id')
    handleGetBlogPost(@Param('post_id') post_id: string) {
        return this.supabase.client
            .from('blog_posts')
            .select('*, author:blog_authors(id, name, photo_url, title)')
            .match({ idd: post_id })
            .maybeSingle()
            .then(res => {
                if (res.error) {
                    throw new InternalServerErrorException(res.error);
                }
                return res.data ?? null;
            })
    }

    @Get('github/contributions')
    handleGetGithubContributions() {
        return this.githubService.getContributions();
    }

}
