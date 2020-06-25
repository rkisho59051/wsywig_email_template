import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import FroalaEditor from 'froala-editor';
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/js/third_party/embedly.min.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quill-text-editor-integration-admin';

  public titleOptions: Object = {
    placeholderText: '',
    charCounterCount: false,
    toolbarInline: true,
    events: {
      "initialized": () => {
        console.log('initialized');
      },
      "contentChanged": () => {
        console.log("content changed");
      }
    }
  }
  public imgOptions: Object = {
    angularIgnoreAttrs: ['style', 'ng-reflect-froala-editor', 'ng-reflect-froala-model'],
    immediateAngularModelUpdate: true,
    events: {
      "contentChanged": () => {
      }
    }
  }
  public content: string = '<span>My Document\'s Title</span>';
  public myTitle: string ='';
  public newMyTitle:string = '';
  public actualValue: string = '';

  fields = [
    {"doctor_name":"Dr.Will Smith"},
    {"patient_name":"John Doe"},
    {"dob":"01/01/2020"},
    {"age":"30 y/o"},
    {"gender_full":"Male"},
    {"gender_half":"M"},
    {"practice_name":"Test Practice"},
    {"practice_link":"https://abc.com"},
    {"doctor_login":"https://abc.com/login"}
  ];
  constructor() { }
  ngOnInit () {
    
    FroalaEditor.DefineIcon('alert', { SVG_KEY: 'help' });
    FroalaEditor.RegisterCommand('alert', {
      title: 'Giphy',
      icon: 'giphyIcon',
      undo: true,
      popup: true,
      plugin: 'giphyPlugin',
      showOnMobile: true,
      refreshAfterCallback: true,
      callback: function () {
        /* Toggle the giphy button */
        if (!this.popups.isVisible('giphyPlugin.popup')) {
          this.giphyPlugin.showPopup();
          this.$tb.find("input.giphy_search_field").focus()
        } else {
          if (this.$el.find('.fr-marker')) {
            this.events.disableBlur();
            this.selection.restore();
          }
          this.popups.hide('giphyPlugin.popup');
        }
      },
    });
  }
  save() {
    console.log(this.myTitle);
  }
  clear() {
    this.myTitle = '';
  }
 
  getButtonText(key){
    
      for(var i=0;i<this.fields.length; i++) {
      var fieldObj = this.fields[i]
      for (const property in fieldObj) {
        if(property == key.innerText.toLowerCase()){
           this.actualValue = fieldObj[property];
        }
    
      }

    }
   
    this.myTitle = this.myTitle + `${this.actualValue}`;

    console.log(key.name);
    console.log(this.actualValue);
  
  }

  // updateText() {if 
  //   (this.editorData.value !== null) 
  //   {
  //     this.templateText = this.editorData.value.replace(/%(\w+)%/g,(match, field) => {const ex = this.selectedTemplate.fieldsAvailable.find((f) => f.key === field);
  //     if (ex) 
  //     {
  //       return ex.example;
  //     }           
  //     return match; 
  //   }); 
  //     this.templateText.trim();
  //   }
  onChange(change){
    // this.newMyTitle = change;

      }
    

}
