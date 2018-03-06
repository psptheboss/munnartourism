import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { CustomOption } from './pages/home/custom-toast';
import { Calendar } from './pages/dashboard/calendar/calendar.component';
import { UsersService } from './users.service';
import { PopupModule } from 'ng2-opd-popup';
// import {provide} from '@angular/core'

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';



var firebaseConfig = {
  apiKey: "AIzaSyCF478nuBpzg5c1Wqs9ZIekmuuubesUCuc",
  authDomain: "munnaradmin.firebaseapp.com",
  databaseURL: "https://munnaradmin.firebaseio.com",
  projectId: "munnaradmin",
  storageBucket: "munnaradmin.appspot.com",
  messagingSenderId: "405672361751"
};

// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    
    HttpModule,
   
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    ToastModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [ {provide:ToastOptions,useClass:CustomOption},APP_PROVIDERS,UsersService
  ]
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}


  