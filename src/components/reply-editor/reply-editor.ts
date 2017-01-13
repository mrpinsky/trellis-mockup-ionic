import { Component, Input, ElementRef } from '@angular/core';

import { FixtureData } from '../../providers/fixture-data';

import Quill from 'quill';

/*
  Generated class for the ReplyEditor component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'reply-editor',
  templateUrl: 'reply-editor.html'
})
export class ReplyEditorComponent {
  @Input() document: TrellisDocument;
  quill: Quill.Quill;

  constructor(private fixtures: FixtureData, private el: ElementRef) {
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

  saveAndClose() {
    this.saveReply();
    console.log('Closing...');
  }

  saveReply() {
    console.log('Saving...');
  }

  publishReply() {
    // debugger;
    this.document.content = this.el.nativeElement.children[0].children[1].children[1].children[0].innerHTML;
    console.log('Publishing...');
    console.log(this.document);
  }
}