import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FirebaseModule } from './modules/firebase.module';
import { FidgetSpinnerComponent } from './components/fidget-spinner/fidget-spinner.component';

@NgModule({
  declarations: [ConfirmDialogComponent, FidgetSpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    FirebaseModule
  ],
  exports: [
    FidgetSpinnerComponent,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    FirebaseModule
  ],
  // * Dialog Component is triggered @ runtime so, should be placed in entryComponents Array
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
// !Exporting all the commonly used modules by other Modules like - CommonModule, FormsModule, CustomMaterialModule
// !It contains all the commonly used directives, pipes, models, etc which are shared by different module
