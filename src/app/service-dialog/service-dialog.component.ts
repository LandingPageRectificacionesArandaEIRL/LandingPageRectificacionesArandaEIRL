import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";
import {NgStyle} from "@angular/common";
@Component({
  selector: 'app-service-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    NgStyle
  ],
  templateUrl: './service-dialog.component.html',
  styleUrl: './service-dialog.component.css'
})
export class ServiceDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, content: string }) {}
}
