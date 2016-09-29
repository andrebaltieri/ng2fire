import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const config = {
  apiKey: "AIzaSyBRbDcMd6pHvzvZ7S0l9qyQeomanAapBTs",
  authDomain: "balta-78124.firebaseapp.com",
  databaseURL: "https://balta-78124.firebaseio.com",
  storageBucket: "balta-78124.appspot.com",
  messagingSenderId: "1061852175522"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
