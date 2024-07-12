import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import * as sha512 from "js-sha512";
import { LoginCardModalComponent } from "../login-card-modal/login-card-modal.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class SignUpModalComponent implements OnInit, OnDestroy{
  signUpForm: FormGroup;
  subscriptions = new Subscription();
  constructor(private _dialogRef: MatDialogRef<SignUpModalComponent>,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.buildEmptyForm();
  }

  buildEmptyForm() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      repeatPassword: new FormControl(null, Validators.required),
      image: new FormControl(null),
    });
  }

  onLogInClick($event: Event): void {
    this._dialogRef.close();
    this.dialog.open(LoginCardModalComponent, {
      hasBackdrop: true,
      backdropClass: 'forum-app-backdrop'
    }).afterClosed().subscribe();
  }

  onSignUpClick($event: MouseEvent) {
    if (this.signUpForm.valid) {

      // const user: UserRequest = {
      //   id: null,
      //   email: this.signUpForm.get('email')?.value,
      //   firstName: this.signUpForm.get('firstName')?.value,
      //   lastName: this.signUpForm.get('lastName')?.value,
      //   password: this.getPasswordHash(this.signUpForm.get('password')?.value),
      //   username: this.signUpForm.get('username')?.value,
      //   city: this.signUpForm.get('city')?.value,
      //   activated: false,
      // }
    }
  }

  getPasswordHash(password: string): string {
    return sha512.sha512(password);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
