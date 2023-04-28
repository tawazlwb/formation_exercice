import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SeriesService } from 'src/app/providers/series/series.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('addDialog', { static: true, read: TemplateRef })
  addDialogTpl!: TemplateRef<any>;

  form = this.fb.group({
    title: ['', [Validators.required]],
    url: ['', [Validators.required]],
  });

  private dialogRef?: MatDialogRef<any>;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private service: SeriesService
  ) {}

  openAddDialog() {
    this.dialogRef = this.dialog.open(this.addDialogTpl);
  }

  submit() {
    if (!this.form.valid) return;
    const serie = this.form.value as ISerie;

    this.service.createSerie(serie).subscribe(() => {
      console.log('Serie added');
      this.dialogRef?.close();
    });
  }
}
