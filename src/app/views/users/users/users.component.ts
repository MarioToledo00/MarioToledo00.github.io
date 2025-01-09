import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInterface } from '../interface/user-interface';
import { UserstableComponent } from '../../customtable/userstable/userstable.component';
import { ButtonComponent } from '../../button/button/button.component';
import { UsersserviceService } from '../services/users/usersservice.service';

@Component({
  selector: 'app-users',
  imports: [UserstableComponent, CommonModule,ButtonComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  usersList: UserInterface[] = [];
  usersService: UsersserviceService = inject(UsersserviceService);
  constructor() {
   this.usersService.getAllUsersList().then((usersList: UserInterface[]) => {
    this.usersList = usersList;
   });
  }

}
