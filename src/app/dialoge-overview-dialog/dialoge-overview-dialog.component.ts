import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-dialoge-overview-dialog',
  templateUrl: './dialoge-overview-dialog.component.html',
  styleUrls: ['./dialoge-overview-dialog.component.css']
})
export class DialogeOverviewDialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<DialogeOverviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
