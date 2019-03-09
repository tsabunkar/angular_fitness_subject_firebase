import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './shared/modules/material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SignupComponent } from './core/auth/signup/signup.component';
import { LoginComponent } from './core/auth/login/login.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    // SignupComponent,
    // LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // FlexLayoutModule,
    // CustomMaterialModule,
    // FormsModule,
    AppRoutingModule, // *Importing this module which has exported RouterModule configuration of all routes and its path
    CoreModule,  // *CoreModule must be only imported onces in AppModule
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase), // *IOmporting AngularFire
    AngularFirestoreModule, // *imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // *imports firebase/auth, only needed for auth features,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
