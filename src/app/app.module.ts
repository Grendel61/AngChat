
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';
var config = {
  apiKey: "AIzaSyB35vTCHIJ3SxSv6rmDjRlI1DFid3Ue7Zs",
  authDomain: "angchatproject-efeb2.firebaseapp.com",
  databaseURL: "https://angchatproject-efeb2.firebaseio.com",
  projectId: "angchatproject-efeb2",
  storageBucket: "angchatproject-efeb2.appspot.com",
  messagingSenderId: "440877365028"
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
