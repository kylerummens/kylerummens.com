import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface GithubContribution {
    count: number;
    date: string;
    level: number;
}

export type GithubContributions = GithubContribution[][];

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private httpClient: HttpClient) { }

    getContributions() {
        return firstValueFrom(this.httpClient.get<GithubContributions>('/api/github/contributions'));
    }

}
