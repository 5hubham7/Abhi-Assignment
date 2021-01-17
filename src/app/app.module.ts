import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, ResultComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
