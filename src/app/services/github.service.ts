import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface GithubContribution {
    count: number;
    date: string;
    level: number;
}

export type GithubContributions = GithubContribution[][];

export interface IGithubCodeProject {
    name: string;
    file_name: string;
    url: string;
    language: string;
}

export interface GithubCodeProject extends IGithubCodeProject {
    content: string;
}

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private httpClient: HttpClient) { }

    getContributions() {
        return firstValueFrom(this.httpClient.get<GithubContributions>('/api/github/contributions'));
    }

    getCodeProjects(code_projects: IGithubCodeProject[]) {

        const params = new HttpParams()
            .set('projects', JSON.stringify(code_projects));

        return firstValueFrom(this.httpClient.get<GithubCodeProject[]>('/api/github/code-projects', { params }));
    }

}
