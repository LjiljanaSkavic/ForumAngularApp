import { Component } from '@angular/core';
import { CATEGORIES } from "../../constants/categories";
import { LoginCardModalComponent } from "../login-card-modal/login-card-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { SignUpModalComponent } from "../sign-up-modal/sign-up-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  categories = CATEGORIES;

  constructor(public dialog: MatDialog) {
  }

  onLoginClick() {
    this.dialog.open(LoginCardModalComponent, {
      hasBackdrop: true,
      backdropClass: 'forum-app-backdrop'
    }).afterClosed().subscribe();
  }

  onSignUpClick(): void {
    this.dialog.open(SignUpModalComponent, {
      hasBackdrop: true,
      backdropClass: 'forum-app-backdrop'
    }).afterClosed().subscribe();
  }
}
