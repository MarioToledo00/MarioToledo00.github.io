import { Injectable } from '@angular/core';
import { UserInterface } from '../../../users/interface/user-interface';
import { environment } from '../../../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {
  protected API_URL = environment.API_URL;
   // This is a list of users
  constructor() { }

  async getAllUsersList(): Promise <UserInterface[]> {
    const data = await fetch(`${this.API_URL}/user`)
    return data.json() ?? []
  }

  async getUserById(id: number): Promise <UserInterface | undefined> {
    const data = await fetch(`${this.API_URL}/user/${id}`)
    return data.json() ?? {}
  }
}
