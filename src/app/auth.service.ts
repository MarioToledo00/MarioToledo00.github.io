import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false; // Cambia esto según tu lógica

  constructor() { }

  checkAuth(): boolean {
    return this.isAuthenticated;
  }

  setAuth(state: boolean) {
    this.isAuthenticated = state;
  }
  
}
