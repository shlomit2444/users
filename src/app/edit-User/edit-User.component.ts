import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';
import { FormGroup, FormBuilder } from "@angular/forms";



@Component({
  selector: 'app-edit-User',
  templateUrl: './edit-User.component.html',
  styleUrls: ['./edit-User.component.css'],
})
export class EditUserComponent implements OnInit {
 // allUsersSource: User[] = [];
  UserForm: User[] = [{
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
    DateOfBorn: '',

  }];

  constructor(
    private UserService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
  //  public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      
      this.getById(id);
    });
  }

  getById(id: number) {
    alert(id);
    this.UserService.getById(id).subscribe((data) => {
      this.UserForm = data;
  
  
    });
  }

  update() {
    this.UserService.update(this.UserForm[0]).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
