import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import * as cheerio from 'cheerio';

@Injectable()
export class GithubService {

    private readonly GITHUB_USERNAME = 'kylerummens';
    private readonly GITHUB_ENDPOINT = 'https://github.com';

    constructor(private httpClient: HttpService) { }

    getContributions() {
        const endpoint = `${this.GITHUB_ENDPOINT}/users/${this.GITHUB_USERNAME}/contributions`;
        return firstValueFrom(this.httpClient.get(endpoint))
            .then(res => {

                const $ = cheerio.load(res.data);

                const contributions: any = [];

                const graph = $('.js-calendar-graph-svg > g');
                graph.children('g').each(function () {
                    const week: any = [];
                    $(this).children('rect').each(function () {
                        week.push($(this).data());
                    })
                    contributions.push(week);
                })

                return contributions;
            })
    }

}