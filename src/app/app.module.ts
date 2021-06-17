import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as bootstrap from "bootstrap"
// import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EncrDecrServiceService } from '../app/services/encr-decr-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EncrDecrServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
