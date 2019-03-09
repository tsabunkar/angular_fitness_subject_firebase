Installing Angular Material in Project
Step 1)
npm install --save @angular/material @angular/cdk @angular/animations

Step 2)
Go to AppModule
@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})

Step 3)
Create material.module.ts -> CustomMaterialModule , which will have all the Angular Material components
that we have imported for AngularMaterial Core libr 
Directly we can just export this module to AppModule. Rather than importing all the angular material compo
in the AppModule

Step 4)
Goto style.css ->
@import "~@angular/material/prebuilt-themes/indigo-pink.css"; (paste this import)
Angular Material have different themes like :
-deeppurple-amber
-indigo-pink
-pink-bluegrey
-purple-green

U can find above themes below path -
node_modules/angular/material/prebuilt-themes

Step 5)
Gesture Support -> Used when our angular application is used in the mobile application like- sliding, etc
npm install --save hammerjs

To use it Goto -> Main.ts > import 'hammerjs';

Step 6)
Material Icons
Goto index.html > 
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


================================================================================================
Error :-
ng g c auth/signup --dry-run

More than one module matches. Use skip-import option to skip importing the component into the closest module.

Ans- It means angular-cli is confused which module to update AppModule or CustomMaterialModule
So specifiy the module where/in-which declarations u want to update this component by specifiying the flag

ng g c auth/signup --dry-run --module app.module
================================================================================================
How to conrtol the layouts/Responsiveness of our Components without using boostrap (bcoz using bootstap and Angular material is not acceptable, Since bootstrap is library used to provide custom styling, which 
has already been achieved using ANgular Material so it is not sensable to use to bootstrap library [which is such a huge libr, just for Responsiveness or layout] ) --use-->
[[ Flexbox ]]

(bcoz Grid is not a part of angular material, So use0 flex-layout)

Git link:
https://github.com/angular/flex-layout

Flex documentation :
https://github.com/angular/flex-layout/wiki/API-Documentation

Angular Flex-Layout :
->Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery
->Flex-layout is a package which uses flexbox-css behind the scene, This allow us developer to precision
  our components layout using directives.
-> This directives can find 
     Documentation > Static API (https://github.com/ angular/flex-layout/wiki/Declarative-API-Overview)
     Documentation > Responsive API (https://github.com/angular/flex-layout/wiki/Responsive-API)
-> Static API :
The Angular Layout API is an intuitive list of HTML directives (aka attributes) that can be used on HTML containers and elements. Instead of using traditional CSS stylesheets, developers will define their layouts declaratively directly in the HTML.

*> API for DOM containers:  (parent Component which act as container)
fxLayout - (It is added to container element, Which tells how the child elements should be positined )
            fxLayout can have values like :   row | column | row-reverse | column-reverse
            If fxLayout is row, Which simply means all child compo is in row
fxLayoutAlign - 
          main-axis: start | center | end | space-around | space-between | space-evenly
          cross-axis: start | center | end | stretch | space-between | space-around | baseline
          
*> API for DOM elements: (All child Component which is present inside the parent container)
fxFlex - "" | px | % | vw | vh | <grow> <shrink> <basis> 
fxFlexOrder - int

NOTE : 
fxLayoutAlign="center center" , Which means -> first value is for main axis and second value is for
cross axis 


-> Responsive API : 
Responsive layouts in Material Design adapt to any possible screen size. Google's specifications provide guidance that includes a flexible grid that ensures consistency across layouts, breakpoint details about how content reflows on different screens, and a description of how an app can scale from small to extra-large screens.
Different Breakpoints are : 
xs	'screen and (max-width: 599px)'
sm	'screen and (min-width: 600px) and (max-width: 959px)'
md	'screen and (min-width: 960px) and (max-width: 1279px)'
lg	'screen and (min-width: 1280px) and (max-width: 1919px)'
xl	'screen and (min-width: 1920px) and (max-width: 5000px)
lt-sm	'screen and (max-width: 599px)'
lt-md	'screen and (max-width: 959px)'
lt-lg	'screen and (max-width: 1279px)'
lt-xl	'screen and (max-width: 1919px)'
gt-xs	'screen and (min-width: 600px)'
gt-sm	'screen and (min-width: 960px)'
gt-md	'screen and (min-width: 1280px)'
gt-lg	'screen and (min-width: 1920px)'

STEPS TO INSTALL :
TO use this flexbox layout in our Angular Material we need to install it :
https://github.com/angular/flex-layout/wiki/Using-Angular-CLI

$ npm install @angular/flex-layout @angular/cdk --save

Goto app.module.ts
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [FlexLayoutModule],
  ...
})



=====================================================================================================
Naming Conventions & Standards to be followed in Angular :-

https://angular.io/guide/styleguide


-> Apply the single responsibility principle (SRP) to all components, services, and other symbols. 
-> define one thing, such as a service or component, per file (use- app.comp.ts, app.comp.html, app.comp.css, rather than defining all this files in app.comp.ts)
-> define small functions
-> Naming conventions are hugely important to maintainability and readability. This guide recommends naming conventions for the file name and the symbol name 
-> use consistent names for all symbols.
-> use dashes to separate words in the descriptive name. (or) use dots to separate the descriptive name from the type
-> use conventional type names including .service, .component, .pipe, .module, and .directive. Invent additional type names if you must but take care not to create too many
-> use consistent names for all assets named after what they represent.
-> use upper camel case for class names.
-> match the name of the symbol to the name of the file
-> append the symbol name with the conventional suffix (such as Component, Directive, Module, Pipe, or Service) for a thing of that type.
->  give the filename the conventional suffix (such as .component.ts, .directive.ts, .module.ts, .pipe.ts, or .service.ts) for a file of that type.
-> use consistent names for all services named after their feature.
-> suffix a service class name with Service. For example, something that gets data or heroes should be called a DataService or a HeroService.
-> use dashed-case or kebab-case for naming the element selectors of component

*) spinal-case,  kebab-case, caterpillar-case, dash-case, hyphen-case --> app-root (all words are in lower case)
*) camelCase (or lowerCamelCase) --> appRoot 
*) PascalCase (or UpperCamelCase) --> AppRoot
*) snake_case --> app_root (all words lower case)
*) SCREAMING_SNAKE_CASE --> APP_ROOT (all words upper case)
*) kebab-case --> app-root  (all words lower case)
*) TRAIN-CASE --> APP-ROOT (all words upper case)
*) Studly caps --> Mixed case with no semantic or syntactic significance to the use of the capitals. Sometimes only vowels are upper case, at other times upper and lower case are alternated, but often it is simply random. ex- tHeqUicKBrOWnFoXJUmpsoVeRThElAzydOG,  Sun Microsystems

-> use a hyphenated, lowercase element selector value (e.g. admin-users).
-> use a custom prefix for a component selector. For example, the prefix toh represents from Tour of Heroes and the prefix admin represents an admin feature area.
->  Use lower camel case for naming the selectors of directives.
-> use a custom prefix for the selector of directives (e.g, the prefix toh from Tour of Heroes).
-> use consistent names for all pipes, named after their feature.
-> name test specification files the same as the component they test.
-> name test specification files with a suffix of .spec.
-> name end-to-end test specification files after the feature they test with a suffix of .e2e-spec.
-> append the symbol name with the suffix Module.
-> give the file name the .module.ts extension.
-> name the module after the feature and folder it resides in.
-> suffix a RoutingModule class name with RoutingModule.
-> end the filename of a RoutingModule with -routing.module.ts.
-> use upper camel/PascalCase case when naming classes.
-> declare variables with const if their values should not change during the application lifetime.
->  spelling const variables in lower camel case. bcoz- Lower camel case variable names (heroRoutes) are easier to read and understand than the traditional UPPER_SNAKE_CASE names (HERO_ROUTES). Also typecript make it easy to identifiy a variable is const or not.
-> tolerate existing const variables that are spelled in UPPER_SNAKE_CASE.
-> name an interface using upper camel case.
-> naming an interface without an I prefix.
-> using a class instead of an interface for services and declarables (components, directives, and pipes).
-> using an interface for data models.
-> use lower camel case to name properties and methods.
-> Avoid prefixing private properties and methods with an underscore. bcoz-  JavaScript lacks a true private property or method. Also TypeScript tooling makes it easy to identify private vs. public properties and methods.
-> leaving one empty line between third party imports and application imports.
-> listing import lines alphabetized by the module.
-> extract templates and styles into a separate file, when more than 3 lines.
-> name the template file [component-name].component.html, where [component-name] is the component name
-> name the style file [component-name].component.css, where [component-name] is the component name.
-> specify component-relative URLs, prefixed with ./
-> use the @Input() and @Output() class decorators instead of the inputs and outputs properties of the @Directive and @Component metadata:
-> placing @Input() or @Output() on the same line as the property it decorates.
-> Avoid input and output aliases except when it serves an important purpose. bcoz - Two names for the same property (one private, one public) is inherently confusing.
-> place properties up top followed by methods.
-> place private members after public members, alphabetized
-> **limit logic in a component to only that required for the view. All other logic should be delegated to services.
-> move reusable logic to services and keep components simple and focused on their intended purpose.
-> name events without the prefix 'on'
-> name event handler methods with the prefix 'on' followed by the event name.
-> use services as singletons within the same injector. Use them for sharing data and functionality
    (Services are ideal for sharing stateful in-memory data.)
-> create services with a single responsibility that is encapsulated by its context.
-> create a new service once the service begins to exceed that singular purpose.
-> provide a service with the app root injector in the @Injectable decorator of the service.
[
  -The Angular injector is hierarchical.
  -When you provide the service to a root injector, that instance of the service is shared and available    in every class that needs the service. This is ideal when a service is sharing methods or state.
  -When you register a service in the @Injectable decorator of the service, optimization tools such as      those used by the Angular CLI's production builds can perform tree shaking and remove services that     aren't used by your app.
  -This is not ideal when two different components need different instances of a service. In this           scenario it would be better to provide the service at the component level that needs the new and        separate instance.
]
-> make data services responsible for XHR calls, local storage, stashing in memory, or any other data operations.
-> Use Lifecycle hooks to tap into important events exposed by Angular.






=====================================================================================================
Project Folder Structure :-
https://angular.io/guide/styleguide#application-structure-and-ngmodules

-> LIFT 
(Locate code quickly, Identify the code at a glance, keep the Flattest structure you can, and Try to be DRY)

*) structure the app such that you can Locate code quickly, Identify the code at a glance, keep the Flattest structure you can, and Try to be DRY.
*) define the structure to follow above four LIFT basic guidelines, listed in order of importance

-> Locate
*) make locating code intuitive, simple and fast.

-> Identify
*) name the file such that you instantly know what it contains and represents.
*) be descriptive with file names and keep the contents of the file to exactly one component.

-> Flat
*) keep a flat folder structure as long as possible.
*) creating sub-folders when a folder reaches seven or more files.

-> T-DRY (Try to be DRY)
*) be DRY (Don't Repeat Yourself). but avoid being so DRY that you sacrifice readability


-> Folders-by-feature structure
*) create folders named for the feature area they represent.
*) create an NgModule for each feature area.
*) RootModule, FeatureModule-1, FeatureModule-2, .., CoreModule, SharedModule

*) App root module 
    (*) create an NgModule in the app's root folder, for example, in /src/app.
    (*) Consider naming the root module app.module.ts.
*) Feature modules
    (*) create an NgModule for all distinct features in an application; for example, a Heroes, Villans      feature.
    (*) place the feature module in the same named folder as the feature area; for example, in app/heroes
    (*) name the feature module file reflecting the name of the feature area and folder; for example, app/heroes/heroes.module.ts.
    (*) name the feature module symbol reflecting the name of the feature area, folder, and file; for example, app/heroes/heroes.module.ts defines HeroesModule.
*) Shared module
    (*) create a feature module named SharedModule in a shared folder; for example, app/shared/shared.module.ts defines SharedModule.
    (*) declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.
    (*) do not providing services in shared modules. Services are usually singletons that are provided once for the entire application or in a particular feature module
    (*) **import all modules required by the assets in the SharedModule; for example, CommonModule and FormsModule.
    (*) declare all components, directives, and pipes in the SharedModule
    (*) export all symbols from the SharedModule that other feature modules need to use
    (*) Avoid specifying app-wide singleton providers in a SharedModule
*) Core module
    (*) create a feature module named CoreModule in a core folder (e.g. app/core/core.module.ts defines CoreModule).
    (*) calling the application-wide core module, CoreModule. Importing CoreModule into the root AppModule reduces its complexity and emphasizes its role as orchestrator of the application as a whole.
    (*) The footer- and header folders contains the global component-files, statically used across the entire application. These files will appear on every page in the application.
    (*) put a singleton service whose instance will be shared throughout the application in the CoreModule (e.g. ExceptionService and LoggerService).
    (*) import all modules required by the assets in the CoreModule (e.g. CommonModule and FormsModule).
    (*) gather application-wide, single use components in the CoreModule. Import it once (in the AppModule) when the app starts and never import it anywhere else. (e.g. NavComponent and SpinnerComponent).
    (*) Avoid importing the CoreModule anywhere except in the AppModule.
    (*) export all symbols from the CoreModule that the AppModule will import and make available for other feature modules to use.
    (*) Only the root AppModule should import the CoreModule.
    (*) guard against reimporting of CoreModule and fail fast by adding guard logic.
    ex-
    
    export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
      if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
      }
    }

Tips for lazy loaded Module: 
-> put the contents of lazy loaded features in a lazy loaded folder. A typical lazy loaded folder contains a routing component, its child components, and their related assets and modules.
-> Avoid allowing modules in sibling and parent folders to directly import a module in a lazy loaded feature.

--------------------------------Summary--------------------------------
Summary (LIFT, Locate, Identify, Flat, T-DRY, Folders-by-feature)-
-> Do start small but keep in mind where the app is heading down the road.
-> Do have a near term view of implementation and a long term vision.
-> Do put all of the app's code in a folder named src.

To check above folder structure : 
https://angular.io/guide/styleguide#overall-structural-guidelines


=====================================================================================================
To Generate Core Module :
ng g m core --dry-run --module app.module
ng g c core/side-nav --module core.module --dry-run
ng g c core/header --module core.module --dry-run

To Generate Shared Module :
ng g m shared  --module app.module --dry-run

ng g s training/training --dry-run --no-spec

====================================================================================================
Firebase :
Firebase - can be used ar Real time DB or backend
AngularFire2 - Is 3rd party libr which act as connector b/w Angular and Firebase


=>Firebase
-> Is easy to use backend 
-> Used @ Server side
-> Can be used as  hosting provider for- Angular/React/Vue frontend application
-> Can be used to perform CRUD at Server layer, Also can be used to authenticate user
-> Firebase has different services like : 
      *) Realtime DB (uses websocket, so get live data in DB)- This DB are NoSQL DB's
        -This DB's store and sync data
        -This DB can be accessed via REST and SDK
        -No Server-side code is required  (NO need to create Rest end points using express, spring boot,    etc). But to sercure this DB we can add protection layer
      *) Authentication
        - User Signup and Login is provided
        - Can be used via REST and SDK
        - No Server side code is required for authentication logic @backend
        - With SDK: Frontend is managed for you (provide method @frontend like -stroingtoken, etc)
      *) Storage
        - Provide service for File Upload and Download
        - Via SDK
        - No Server-side code is required
      *) Analytics
        - provides various analytics services
        - Firebase is very popular for Mobile Apps like : Ios and Android  
        - Analytic feature like : User Behavior, Crash Statistics
        - Convenient to use Dashboard
      *) Cloud Foundation
        - On Demand Server side code
        - Connect to various Events
        - Only runs when needed.
      *) Machine Learning Kit

All the above services are managed for us developer, we just need to use their firebase Resources, Also 
Security and Resources are managed for us developer.

-> AngularFire-2 (3rd party libr) can be used to use above firebase feature in Angular Application.

Q) What is AngularFire ?
AngularFire act as connector or bridge b/w your frontend Application (Angular) and Backend application 
(which is Firebase)
Remeber Maxmillina course on ANgular COmplete guide :- Where to interact b/w ANgular and Firebase we used
REST API in the url itself ex- http.get('_______.json')
ANd for Authentication in firebase we have used SDK provided by Angular firebase Sdk
But for this course we wont be using those above approaches, But we will be using 3rd party libr/pacakge
called ANgularFire which used to interact b/w Angular and Firebase using Rest calls also Authentication.

Note : AngularFire can be only used in Angular Frameworks, but cannot be used in other frameworks/libr like React or Vue, etc

====================================================================================================
Using Firebase :
Go to Console - Create Project : ng-fitness-tracker

https://console.firebase.google.com/project/ng-fitness-tracker-7b250/database

Note : We r using Cloud Firestore, not RealtimeDB
->Database > Cloud Firestore > Create DB > 
  Security rules for Cloud Firestore: Start in test mode

->DB - Cloud Store (Check Default Selected)
+Add Collection (click)

Collection ID : avaliableExercises (next)

[Create ex- Document as present in exercise.model.ts ]- exerciseId  string  1
                                                        exerciseName string  Crunches
                                                        ...
                                                        ...
(Save)

-----
->Now let us install AngularFire2
Steps : https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md

$ npm install @angular/fire firebase --save
-----
->Go back to firebase website :-
(click) Project Overview (tab)
(click) on -> Add Firebase to your web app [click on symbol - </> ]

->Go to environment.ts
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDro4bm2OVCtfKevetsrBvqnZng-g9ybu8',
    authDomain: 'ng-fitness-tracker-7b250.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-7b250.firebaseio.com',
    projectId: 'ng-fitness-tracker-7b250',
    storageBucket: 'ng-fitness-tracker-7b250.appspot.com',
    messagingSenderId: '991600148905'
  }
};



->Goto AppModule :

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],



-> Import What u need '@angular/fire' package in AppModule

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],















===================================================================================================

->Difference between valueChanges() and snapshotChanges() :-
valueChanges() method will never give us the meta-data i.e- uniqueId generated by firebase db
but if we have a requirement to fetch the meta data then use : snapshotChanges()


    this.db.collection('avaliableExercises')
      .valueChanges() // valueChanges -> Gives observable whenever value changes
      .subscribe(
        result => console.log(result)
      );



    this.db.collection('avaliableExercises')
      .snapshotChanges() 
      .subscribe(
        result => console.log(result)
      );

// [To get the actual data from snapShotChanges()] ->

  this.db.collection('avaliableExercises')
      .snapshotChanges() 
      .subscribe(
        result => {
          for(const resu of result){
                console.log(resu.payload.doc.data());
          }
        }
      );


=====================================================================================================
Performing CRUD operation in angular firebase :

-> POST exercise document to historyExercises collection
  this.db.collection('historyExercises').add(exercise);

-> GETALL documents from  historyExercises collection
  this.db.collection('historyExercises').valueChanges()

-> Update a single document using uniqueId
  this.db.doc('historyExercises/' + uniqueId).update({propertyToUpdate : 'new_value'})

  doc() -> used to access a particular document using uniqueId(ObjectId), this method will takes
  path to the document (i.e-collection) followed by '/' then unqiueId/ObjectId(using which we can identifiy the document uniquely)


-> To set/Post particular document : (IT WILL OVERRIDE THE EXSITING DOCUMENT VALUE)
  this.db.doc('historyExercises/' + uniqueId).set({propertyToUpdate : 'new_value'})

Note : update() will not override the complete document, rather it will only update particular property
which is need to be updated, where as- set() will override the complete document data.

-> Delete particular Document :
 this.db.doc('historyExercises/' + uniqueId).delete();


Resource : https://github.com/angular/angularfire2/blob/master/docs/firestore/documents.md 
=====================================================================================================
