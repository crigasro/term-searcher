import { AlertService } from './../../services/alert.service';
import { Router } from '@angular/router';
import { TermItem } from './../../models/term-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})
export class TermComponent implements OnInit {

  term: TermItem;

  constructor(
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.term = window.history.state.termItem;

    if (!this.term) {
      const diagRef = this.alertService.showCustomAlert('No term was found.', 'Ok');
      diagRef.afterClosed().subscribe(() => this.onNavBack());
    }
  }

  onNavBack() {
    this.router.navigate(['..']);
  }

}
