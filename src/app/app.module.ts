import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyCho2p1Q7YaViFnbNKYppak5sq5VOAqnBA",
  authDomain: "first-react-78c52.firebaseapp.com",
  databaseURL: "https://first-react-78c52.firebaseio.com",
  projectId: "first-react-78c52",
  storageBucket: "first-react-78c52.appspot.com",
  messagingSenderId: "285013340576"
};

import { MyApp } from './app.component';
import { HttpProvider } from '../providers/http/http';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { ToolsProvider } from '../providers/tools/tools';
import { LocationProvider } from '../providers/location/location';
import { StorageProvider } from '../providers/storage/storage';
import { LoadingProvider } from '../providers/loading/loading';
import { CategorysProvider } from '../providers/categorys/categorys';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    FirebaseProvider,
    ToolsProvider,
    LocationProvider,
    StorageProvider,
    LoadingProvider,
    CategorysProvider
  ]
})
export class AppModule {}
