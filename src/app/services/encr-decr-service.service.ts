import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncrDecrServiceService {

  password = 'PGYaM2CSvrgmjk2*';



  constructor() { }

  //The set method is use for encrypt the value.
  encript(data) {
    var key = CryptoJS.enc.Utf8.parse(this.password);
    var iv = CryptoJS.enc.Utf8.parse(this.password);
    let encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });

    return encrypted.toString();
  }

  //The get method is use for decrypt the value.
  decript(value) {
    var key = CryptoJS.enc.Utf8.parse(this.password);
    var iv = CryptoJS.enc.Utf8.parse(this.password);
    var decrypted = CryptoJS.AES.decrypt(value, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }


}
