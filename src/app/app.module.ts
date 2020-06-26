import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { FroalaViewModule } from 'angular-froala-wysiwyg';
import { FroalaComponent } from "./froala.component";
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SafeHtmlPipe } from './safe-html.pipe';
// import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';



@NgModule({
  declarations: [
    AppComponent,
    FroalaComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    FroalaEditorModule,
    FroalaViewModule,
    AngularEditorModule,
    HttpClientModule, 
    // NbSidebarModule,
    // NbLayoutModule  
  ],
  providers: [
    // NbSidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
