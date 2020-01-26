import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AESEncryptDecryptService } from '../../services/encryption';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarOpen: boolean = false;
  notConnected: boolean = true;
  connected: boolean = false;
  usermail: string;
  password: string;

  firstName: string;
  Name: string;

  
  check_connection() {
    if (localStorage.getItem("userName") !== null) {
      this.notConnected = false;
      this.connected = true;
      this.firstName = localStorage.getItem('userFirstName');
      this.Name = localStorage.getItem('userName');
    }
  }

  toggleNavbar() {

    this.navbarOpen = !this.navbarOpen;
  }

  logOut() {
    localStorage.removeItem("userFirstName");
    localStorage.removeItem("userMail");
    localStorage.removeItem("userCryptedPassword");
    localStorage.removeItem("userName");
  }

  login() {
    if ((this.usermail === sessionStorage.getItem('userMail'))
        && (this.password === this.EncryptDecryptService.decrypt(sessionStorage.getItem('userCryptedPassword')))) {
          alert('You are now connected');
          this.notConnected = false;
          this.connected = true;
          this.firstName = localStorage.getItem('userFirstName');
          this.Name = localStorage.getItem('userName');
          localStorage.setItem('userMail', this.usermail);
          localStorage.setItem('userCryptedPassword', this.EncryptDecryptService.encrypt(this.password));
          localStorage.setItem('userFirstName', sessionStorage.getItem('userFirstName'))
          localStorage.setItem('userName', sessionStorage.getItem('userName'))
          this.firstName = sessionStorage.getItem('userFirstName');
          this.Name = sessionStorage.getItem('userName');
    }
    else {
      alert('Invalid mail or password. Please try again.')
    }
  }

  constructor(private EncryptDecryptService: AESEncryptDecryptService, private router: Router) { }

  ngOnInit() {
    this.check_connection();
  }


}
