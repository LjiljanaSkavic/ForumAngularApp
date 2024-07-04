import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-login-card-modal',
  templateUrl: './login-card-modal.component.html',
  styleUrls: ['./login-card-modal.component.scss']
})
export class LoginCardModalComponent implements OnInit, OnDestroy{
  hidePassword = true;
  loginForm!: FormGroup;
  invalidCredentials = false;
  subscriptions = new Subscription();
  constructor(public dialog: MatDialog,
              private readonly _formBuilder: UntypedFormBuilder,
              private _dialogRef: MatDialogRef<LoginCardModalComponent>) {
  }

  ngOnInit(): void {
    this.buildForm();

    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

    this.subscriptions.add(
      this.loginForm.get('username')?.valueChanges.subscribe(value => this.invalidCredentials = false)
    );
    this.subscriptions.add(
      this.loginForm.get('password')?.valueChanges.subscribe(value => this.invalidCredentials = false)
    );
  }

  buildForm() {
    this.loginForm = this._formBuilder.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }
  onLoginClick($event: MouseEvent): void {

  }

  onSignUpClick($event: MouseEvent): void {

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
