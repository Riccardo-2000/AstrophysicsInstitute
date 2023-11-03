import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setIdAuthenticator(){
    localStorage.setItem('idUser', '1')
  }
  getIdAuthenticator(){
    return Number(localStorage.getItem('idUser'))
  }
}