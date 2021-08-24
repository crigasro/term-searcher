import { TermHelperService } from './../../services/term-helper.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  searchNotifier = new Subject<string>();

  constructor(
    private termHelper: TermHelperService
  ) { }

  ngOnInit(): void {
    this.searchNotifier
      .pipe(debounceTime(500))
      .subscribe(input => this.searchItems(input));
  }

  ngOnDestroy() {
		this.searchNotifier.complete();
	}

  searchItems(input: string) {
    if (!input) {
      return;
    }
    this.termHelper.getSearchedResults(input)
      .pipe(takeUntil(this.searchNotifier))
      .subscribe(
        res => {
          console.log(res.totalItems);
        },
        err => {
          console.log(err);
        }
      );
  }

}
