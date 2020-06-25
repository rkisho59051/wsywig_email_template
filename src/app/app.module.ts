import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { FroalaViewModule } from 'angular-froala-wysiwyg';
import { FroalaComponent } from "./froala.component";




@NgModule({
  declarations: [
    AppComponent,
    FroalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    FroalaEditorModule,
    FroalaViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
