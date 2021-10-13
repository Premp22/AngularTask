import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/Users/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private userService: UserService,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {}
  addUserForm = this.formBuilder.group({
    id: [''],
    firstname: [''],
    lastname: [''],
    email: [''],
    password: [''],
  });
  ngOnInit(): void {}
  showMsg: boolean = false;
  addUser() {
    this.userService.adduser(this.addUserForm.value).subscribe((result) => {
      console.log(result);
      this.showMsg = true;
      this._router.navigate(['users/details']);
    });
  }
}
