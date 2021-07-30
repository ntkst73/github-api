import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  username: string;
  repoName: string;
  clientId: string = 'c789323b20a2d31dc9fa';
  clientSecret: string = '83e428e5ed1c99fded8ab02686753f74656f9f6b';
  apikey: string = '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';
  constructor(private http: HttpClient) {
    console.log('service is now ready');
  }

  getName(repoId) {
    return this.http.get('https://api.github.com/repositories/' + repoId);
  }

  searchrepos(): Observable<any> {
    return this.http.get(
      'https://api.github.com/search/repositories?q=' + this.repoName,
      {
        headers: new HttpHeaders({ Authorization: `token ${this.apikey}` }),
      }
    );
  }

  UpdateRepo(repo: string) {
    this.repoName = repo;
  }
}
