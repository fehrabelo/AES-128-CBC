
// Important links:

// testing online the data cryptographed: https://encode-decode.com/aes-128-cbc-encrypt-online/
// tutorial: https://www.code-sample.com/2018/12/angular-7-cryptojs-encrypt-decrypt.html?m=1
import * as CryptoJS from 'crypto-js';

import { Component, OnInit } from '@angular/core';
import { EncrDecrServiceService } from './services/encr-decr-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EncryptionDecryptionSample';


  // variables
  plainText: string;
  encryptText: string;
  encryptedData: any;
  decryptedData: any;

  //get client ip
  ipAddress: any;

  constructor(private EncrDecr: EncrDecrServiceService,
    private http: HttpClient) {
    this.http.get<{ ip: string }>('https://jsonip.com')
      .subscribe(data => {
        console.log('th data', data);
        this.ipAddress = data
      })
  }

  ngOnInit() { }

  encript() {

    // here i'm using an object, but can be the user input
    const data = {
      "orderCode": "70667F60",
      "cardNumber": "5354426680114293",
      "brand": "mastercard",
      "name": "Paulo Guina Fagundes",
      "month": "11",
      "year": "22",
      "securityCode": "132",
      "installment": "1",
      "IpAddress": this.ipAddress.ip
    };

    this.encryptedData = this.EncrDecr.encript(data);
    console.log(this.encryptedData);

    // var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(this.data), this.password).toString();
    // console.log(ciphertext);
  }

  decript() {
    this.decryptedData = this.EncrDecr.decript(this.encryptedData);
    console.log(this.decryptedData);
  }

}
