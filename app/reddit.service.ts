import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class rAPIService {
  APIurl: string;

  constructor(private http: Http) {
    this.http = http;
    this.APIurl = 'https://www.reddit.com/r/earthPorn/new.json?sort=new&limit=10';
  }

  getAll(): void{

    this.http.request('https://www.reddit.com/r/earthPorn/new.json?sort=new&limit=10')
      .subscribe((res: Response) => {
        console.log(res.json());
      })

  }

  // Get 10 latest images
  fetchStories(): Observable<any> {
    return this.http.get(`${this.APIurl}`)
      .map(response =>
        response.json()
      );
  }

  // Get Next 10 images by next page ID (after)
  fetchNext(nextId: string): Observable<any> {
    return this.http.get(`${this.APIurl}&after=${nextId}`)
      .map(response => response.json());
  }

  // Get Previous 10 images by previous page ID (before)
  fetchPrevious(previousId: string): Observable<any> {
    return this.http.get(`${this.APIurl}&before=${previousId}`)
      .map(response => response.json());
  }

}
