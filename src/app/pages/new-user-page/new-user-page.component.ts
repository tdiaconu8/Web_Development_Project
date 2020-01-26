import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {Router} from '@angular/router';
import { AESEncryptDecryptService } from '../../services/encryption'; 


@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.css']
})
export class NewUserPageComponent implements OnInit {

  inputName: string;
  inputFirstName: string;
  inputMail: string;
  inputPassword: string;
  inputPasswordConfirmation: string;

  registerUser(){ 
    if((this.inputPassword === this.inputPasswordConfirmation) 
      && (this.inputName != '')
      && (this.inputFirstName != '')
      && (this.inputMail != '')
      && (this.inputPassword != '')
      && (this.inputPasswordConfirmation != '')) {
        localStorage.setItem('userName', this.inputName);
        localStorage.setItem('userFirstName', this.inputFirstName);
        localStorage.setItem('userMail', this.inputMail);
        localStorage.setItem('userCryptedPassword', this.EncryptDecryptService.encrypt(this.inputPassword));
        sessionStorage.setItem('userName', this.inputName);
        sessionStorage.setItem('userFirstName', this.inputFirstName);
        sessionStorage.setItem('userMail', this.inputMail);
        sessionStorage.setItem('userCryptedPassword', this.EncryptDecryptService.encrypt(this.inputPassword));
        alert('You are now registered ! You can connect')
    }
    else {
      alert('Invalid password confirmation');
    }
  }

  constructor(private EncryptDecryptService: AESEncryptDecryptService) {
   
  }

  ngOnInit() {
  }

}
