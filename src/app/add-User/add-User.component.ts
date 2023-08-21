import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-User',
  templateUrl: './add-User.component.html',
  styleUrls: ['./add-User.component.css'],
})
export class AddUserComponent implements OnInit {
  UserForm: User = {
    IDUser: 0,
    UserName: '',
    UserPassword: '',
    FirstName: '',
    LastName: '',
    UserAdress: '',
    UserPhone: '',
    Gender: '',
    IDShop: 0,
    Email: '',
    DateOfBorn: ''




  };

  constructor(
    private UserService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create() {
    this.UserService.create(this.UserForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
