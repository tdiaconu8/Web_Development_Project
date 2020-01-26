import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AESEncryptDecryptService {

  secretKey = "2s5u8x/A"; // secret key randomly generate for 64 bit
  constructor() { }

  encrypt(value : string) : string{ // encrypt function using CryptoJS
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt : string){ // decrypt function
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
}