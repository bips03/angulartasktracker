import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskitemComponent } from './components/taskitem/taskitem.component';
import { AddtaskComponent } from './components/addtask/addtask.component';

const firebase = {
  apiKey: 'AIzaSyBuwSOpEUSH81g4zmcrD-atK-dRb31PtGM',
  authDomain: 'angular-tasktracker.firebaseapp.com',
  projectId: 'angular-tasktracker',
  storageBucket: 'angular-tasktracker.appspot.com',
  messagingSenderId: '229226861756',
  appId: '1:229226861756:web:84816150f7cdd80896ecb9',
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskitemComponent,
    AddtaskComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
