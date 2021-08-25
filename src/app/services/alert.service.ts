import { AlertComponent } from './../components/alert/alert.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private matDialog: MatDialog
  ) { }

  showCustomAlert(message: string, buttonText: string) {
    this.matDialog.open(AlertComponent, {
      width: '390px',
      height: '160px',
      data: {
        message,
        buttonText
      }
    });
  }
}
