import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase), // *IOmporting AngularFire
    AngularFirestoreModule, // *imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // *imports firebase/auth, only needed for auth features,
  ]
})
export class FirebaseModule { }
// !We could have directly imported all firebase realted Modules directly inside the CoreMOdule
// !but didn't do that bcoz- AngularFirestore is used in FeatureMOdule like -TrainingModule
// !So importing all firebase realted Modules into FirebaseModule and then importing module to SharedModule
// !which will then import to AppModule

