import { AlertService } from './../../services/alert.service';
import { TermItem } from './../../models/term-item';
import { TermHelperService } from './../../services/term-helper.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  searchNotifier = new Subject<string>();
  resultItems: TermItem[] = [];

  constructor(
    private termHelper: TermHelperService,
    private alertService: AlertService,
    private router: Router
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
      this.resultItems = [];
      return;
    }
    this.termHelper.getSearchedResults(input)
      .pipe(takeUntil(this.searchNotifier))
      .subscribe(
        res => {
          console.log(res.totalItems);
          this.resultItems = res.items;
        },
        err => {
          this.showErrorAlert();
        }
      );
  }

  onSelectItem(termItem: TermItem) {
    this.router.navigate(['/term'], { state: { termItem } });
  }

  showErrorAlert() {
    this.alertService.showCustomAlert(
      'An error ocurred while requesting. Try again',
      'Ok'
    );
  }

}
