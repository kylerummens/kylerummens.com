import * as cheerio from 'cheerio';
import { cache } from 'react';

export const getGithubContributions = cache(async (): Promise<{ date: string, level: number }[][]> => {

    const GITHUB_USERNAME = 'kylerummens';
    const GITHUB_ENDPOINT = 'https://github.com';

    const endpoint = `${GITHUB_ENDPOINT}/users/${GITHUB_USERNAME}/contributions`;

    const response = await fetch(endpoint);
    const text = await response.text();

    const $ = cheerio.load(text);

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

});