import { Component, Input } from '@angular/core';
import Quill from 'quill';

/*
  Generated class for the TextEditor component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'text-editor',
  templateUrl: 'text-editor.html'
})
export class TextEditorComponent {
  @Input() reply: TrellisDocument;
  quill: Quill.Quill;

  constructor() {
    setTimeout(this.initializeQuill, 1000)
  }

  initializeQuill() {
    this.quill = new Quill('#editor-container', {
      theme: 'snow',
      formats: [
        'bold',
        'italic',
        'underline',
        // 'atmention',
        // 'hashtag',
        // 'trellis-image',
        'link',
        'list',
        'bullet',
        'header',
        'align',
      ],
      // modules: {
      //   toolbar: {
      //     container: $element[0].children[0].children[0],
      //   },
      // },
    });
  }

}
