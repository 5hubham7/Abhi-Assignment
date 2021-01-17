import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url = 'https://jsonplaceholder.typicode.com/users';

  private searchData = new BehaviorSubject(['default message']);
  currentSearchData = this.searchData.asObservable();

  constructor(private httpClient: HttpClient) {}

  getResult() {
    return this.httpClient.get(this.url);
  }

  changeMessage(data: any) {
    this.searchData.next(data);
  }
}
