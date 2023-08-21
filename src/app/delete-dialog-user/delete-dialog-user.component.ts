import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete-dialog-user',
  templateUrl: './delete-dialog-user.component.html',
  styleUrls: ['./delete-dialog-user.component.css'],
})
export class DeleteDialogUserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private UserService: UsersService
  ) {}

  ngOnInit(): void {}

  confirmDelete() {
   this.UserService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }
}
