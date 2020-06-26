import { Component, ViewEncapsulation, PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'quill-text-editor-integration-admin';


  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '13rem',
    minHeight: '13rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'A Sample Template',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',

    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: '',
    uploadWithCredentials: false,
    sanitize: false,
    toolbarPosition: 'top',


  };
  toolbarHiddenButtons: [
    [
      'undo',
      'redo',
      'bold',
      'italic',
      'underline',
      'strikeThrough',
      'subscript',
      'superscript',
      'justifyLeft',
      'justifyCenter',
      'justifyRight',
      'justifyFull',
      'indent',
      'outdent',
      'insertUnorderedList',
      'insertOrderedList',
      'heading',
      'fontName'
    ],
    [
      'fontSize',
      'textColor',
      'backgroundColor',
      'customClasses',
      'link',
      'unlink',
      'insertImage',
      'insertVideo',
      'insertHorizontalRule',
      'removeFormat',
      'toggleEditorMode'
    ]
  ]

  public content: string = '<span>My Document\'s Title</span>';
  editorData = new FormControl(null);
  templateText: string = null;
  templateType: string;

  fieldsAvailable = [
    {
    "key": "doctor_name",
    "example": "Dr.Will Smith"
    },
    {
    "key": "patient_name",
    "example": "John Doe"
    },
    {
    "key": "dob",
    "example": "01/01/2000"
    },
    {
    "key": "age",
    "example": "30 y/o"
    },
    {
    "key": "gender_full",
    "example": "Male"
    },
    {
    "key": "gender_half",
    "example": "M"
    },
    {
    "key": "practice_name",
    "example": "Test Practice"
    },
    {
    "key": "practice_link",
    "example": "https://abc.com"
    },
    {
    "key": "doctor_login",
    "example": "https://abc.com/login"
    }
    ]
  // fields = [
  //   {"doctor_name":"Dr.Will Smith"},
  //   {"patient_name":"John Doe"},
  //   {"dob":"01/01/2020"},
  //   {"age":"30 y/o"},
  //   {"gender_full":"Male"},
  //   {"gender_half":"M"},
  //   {"practice_name":"Test Practice"},
  //   {"practice_link":"https://abc.com"},
  //   {"doctor_login":"https://abc.com/login"}
  // ];
  constructor() { }
  ngOnInit() {
    this.editorData.valueChanges
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((v) => this.updateText());
  }

  // updateText() {
  //   console.log('update function');
  //   if (this.editorData.value !== null) {

  //     this.templateText = this.editorData.value.replace(
  //       /%(\w+)%/g,

  //       (match, field) => {
  //         console.log('match' + match + ' ' +'field' + field);
  //         const ex = this.fields.find(
  //           (f) => f === field
  //           // console.log('f ' +f['key'])
  //         );
  //         if (ex) {
  //           console.log('ex '+ex);
  //         }
  //         console.log('field '+field+ 'match '+match+ 'ex '+ex);

  //         return field;
  //       });

  //     this.templateText.trim();

  //   }

  //   console.log('templateText ' +`${this.templateText}`);

  // }


  updateText() {
    if (this.editorData.value !== null) {
      this.templateText = this.editorData.value.replace(
        /%(\w+)%/g,
        (match, field) => {
          const ex = this.fieldsAvailable.find(
            (f) => f.key === field
          );
          if (ex) {
            return ex.example;
          }
          return match;
        }
      );
      this.templateText.trim();
    }
  }




  save() {
    console.log(JSON.stringify(this.editorData.value));
  }
  clearText() {
    this.editorData.reset();
    this.templateText = "";
  }

  getButtonText(key) {



    this.editorData.setValue(
      `${
      this.editorData.value === null ? "" : this.editorData.value
      } %${key.name}%`
    );




  }

}
