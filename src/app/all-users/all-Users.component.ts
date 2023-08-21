import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogUserComponent } from '../delete-dialog-user/delete-dialog-user.component';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})



export class AllUsersComponent implements OnInit {
  UserForm: any;
 // bookForm: FormGroup;
  allUsersSource: User[] = [];
  displayedColumns: string[] = [
    'IDUser',
    'UserName',
    'FirstName',
    'UserPassword',
    'LastName',
    'UserAdress',
   'UserPhone',
   'Gender',
    'IDShop',
    'Email',
   'DateOfBorn',
   'actions'
  ];



  constructor(
    private UserService: UsersService,
    public dialog: MatDialog
 //   public formBuilder: FormBuilder,
    
  ) { 
  }

  ngOnInit(): void {

    this.get();

 

  
  }

  get() {
    this.UserService.get().subscribe((data) => {
      
      this.allUsersSource = data;
     
    });
  }

  openDeleteModal(IDUser: number) {
    const dialogRef = this.dialog.open(DeleteDialogUserComponent, {
      width: '250px',
      data: { IDUser },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allUsersSource = this.allUsersSource.filter(
          (_) => _.IDUser !== IDUser
        );
      }
    });
  }
}
 /* 
  getById(id: number) {
    this.UserService.getById(id).subscribe((data) => {
      this.bookForm = data;
     
    });
  }

  update() {
    this.UserService.update(this.bookForm).subscribe(() => {
  //    this.router.navigate(['/']);
    });
  }
}
*/
