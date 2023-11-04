import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AstrophysicsInstitute';

  constructor(private authService: AuthService){
    this.checkAuth()
  }

  //check id sesstion storage
  checkAuth(){
    let id = localStorage.getItem('idUser')!=null
    if(!id) {
      this.authService.setIdAuthenticator()
    }

  }
}
