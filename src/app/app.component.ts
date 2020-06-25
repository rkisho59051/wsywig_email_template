import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular';
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
  // sampleData="This is a Sample Template"
  // data:any;
  // datas='';
  // preview:any;
  // previousData:any;
  // latestData:any;
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
  // public onChange( event: CKEditor4.EventInfo ) {
  //    this.sampleData = event.editor.getData();
  //    console.log(this.sampleData);
      // this.preview = this.sampleData;
    //  document.getElementById('preview').innerHTML = this.sampleData;
    
// }
  clear() {
    this.myTitle = '';
  }
 
  getButtonText(key){
    
    // this.flds[0].doctor_name
    // debugger;
    
    // this.datas = `${this.data} %${item.innerText}%`;


    // console.log(this.data);
    // console.log(Object.keys(this.fields[0]));
    // this.datas = this.data + Object.keys(this.fields[0]);
      for(var i=0;i<this.fields.length; i++) {
      var fieldObj = this.fields[i]
      for (const property in fieldObj) {
        if(property == key.innerText.toLowerCase()){
           this.actualValue = fieldObj[property];
        }
        // console.log(`${property}: ${fieldObj[property]}`);
      }

    }
    // document.getElementById('preview').innerHTML = document.getElementById('preview').innerHTML.concat(preview);
    // this.data = this.data + preview;
    this.myTitle = this.myTitle + `${this.actualValue}`;
    // console.log(this.myTitle);
    console.log(key.name);
    console.log(this.actualValue);
    
    // document.getElementById('textBox').innerHTML = `${this.data} ${preview}`;    
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
    this.newMyTitle = change;

      }
    

}
