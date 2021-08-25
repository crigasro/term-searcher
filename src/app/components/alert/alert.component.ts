import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string, buttonText: string},
    public dialogRef: MatDialogRef<AlertComponent>,
  ) { }

  onCloseClick() {
    this.dialogRef.close();
  }

}
