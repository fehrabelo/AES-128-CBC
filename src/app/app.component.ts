
// Important links:

// testing online the data cryptographed: https://encode-decode.com/aes-128-cbc-encrypt-online/
// tutorial: https://www.code-sample.com/2018/12/angular-7-cryptojs-encrypt-decrypt.html?m=1

import { Component, OnInit } from '@angular/core';
import { EncrDecrServiceService } from './services/encr-decr-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EncryptionDecryptionSample';

  plainText: string;
  encryptText: string;

  encryptedData: any;
  decryptedData: any;

  // the password must be hexadecimal
  password = "156874HKSU8963KA"
  // password = "PGYaM2CSvrgmjk2*"

  // data = [{
  //   number: '4761739001010036',
  //   name: 'Cleide Oliveira',
  //   month: '12',
  //   year: '22',
  //   cvv: '123',
  //   installment: '1'
  // }];

  // data = {
  //   "orderCode": "string",
  //   "cardNumber": "string",
  //   "brand": "string",
  //   "name": "string",
  //   "month": "string",
  //   "year": "string",
  //   "securityCode": "string",
  //   "installment": 0,
  //   "attemptedPayment": "string",
  //   "sessionId": "string",
  //   "IpAddress": "string"
  // };

  data = { "OrderCode": "DCE5E71D", "CardNumber": "5545 7629 7954 0131", "Brand": "Master", "Name": "Juliana Talet", "Moth": "01", "Year": "2022", "SecurityCode": "579", "Installment": 2, "AttemptedPayment": "1", "SessionId": "Ojhoi-plokij786yhgyt-loki87yhgyt65", "IpAddress": "10.68.1.19" }
  teste = "8uWb8e9AqP3VTZw72fJNHH63HPvoeB4SoeLizMEIr6bdu78Pw/mWO/xa6hRmfc7+I8swyLWcoLNSzhaRyCiO08bFhuEFzlJxNQzhv6OSvQCqrjQwDwnHSmj3dtyFxZ7P99TURO8D4CNNeA36ZuxPUeiT3fGqR8ro73SXjBj3SPL99J7OC5XymmRwG182Mwjisj8uBYO5Geq9gHbMl4lKCLYQFw1Djy+BsxTh+hmclAV/4HOTyQe5GMZiS9ZQ5Q8ZIBSgKj93G8C/eaRo/eXz1WBt0zisJnuw5EHgtPvnvqqBGzKwQBglN2lbnmIN4HKG499t8CNHUd/qn2jSCbcWIqOn8INz+SYp1Tnqk+IO0qQ="
  constructor(private EncrDecr: EncrDecrServiceService) { }

  ngOnInit() { }

  encript() {
    // the line bellow  passes array into json
    let data1 = JSON.stringify(this.data);
    this.encryptedData = this.EncrDecr.set(this.password, data1);
    console.log(this.encryptedData);
  }

  decript() {
    this.decryptedData = this.EncrDecr.get(this.password, this.encryptedData);
    console.log(this.decryptedData);
  }

}
