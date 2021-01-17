import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  data: any = [];
  searchResult: any;
  searchThis: string = 'Search the name..';
  searchData: any;
  subscription: Subscription;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.subscription = this.searchService.currentSearchData.subscribe(
      (searchData) => (this.searchData = searchData)
    );

    this.searchService
      .getResult()
      .pipe()
      .subscribe((res) => {
        this.data = res as string[];
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  searchName(value: string) {
    console.log(value);
    this.searchThis = value;
    this.searchResult = this.data.filter((i) => {
      return i.name == this.searchThis;
    });
    if (this.searchResult.length) {
      this.searchService.changeMessage(this.searchResult);
    }
  }
}
