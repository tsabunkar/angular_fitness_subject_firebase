import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FidgetSpinnerService {

  constructor() { }
  // spinnerStateChanged -> Event emitter, used to hide or show the spinner
  // Also this global variable, since creating a Service in shared folder.
  // According Angular-style-guide : Never create Service in SharedModule
  // but we r creating Service only to manage spinnerStateChanged throughout the app
  spinnerStateChanged = new Subject<boolean>();
}
