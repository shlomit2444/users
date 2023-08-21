import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-User/add-User.component';
import { AllUsersComponent } from './all-users/all-Users.component';
import { EditUserComponent } from './edit-User/edit-User.component';

const routes: Routes = [
  {
    path: '',
    component: AllUsersComponent,
  },
  {
    path: 'add-User',
    component: AddUserComponent,
  },
  {
    path: 'edit-User/:id',
    component: EditUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
