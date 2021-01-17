import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  searchData: any;
  subscription: Subscription;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.subscription = this.searchService.currentSearchData.subscribe(
      (searchData) => (this.searchData = searchData)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
