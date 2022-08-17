import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactFormModel } from 'src/app/models/contact-form.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{

  name : string = "";
  email: string = "";
  message: string = "";

  constructor(public dialogRef: MatDialogRef<ContactFormComponent>,@Inject(MAT_DIALOG_DATA) public data: ContactFormModel) {}

  nameFormControl = new FormControl('', [
  Validators.required,   
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  messageFormControl = new FormControl('', [
    Validators.required,
  ]);

  closeDialog(): void {
    this.dialogRef.close();
  }
}
