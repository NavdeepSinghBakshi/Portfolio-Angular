import { Component, OnInit, ViewChild } from '@angular/core';
import { FileChangedEvent, FileInputDirective } from 'src/app/core/directives/file-input.directive';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.css']
})
export class FilePreviewComponent implements OnInit {
  imageURL ?: string;

  @ViewChild(FileInputDirective) inputDirective !: FileInputDirective
    constructor() { }
  
    ngOnInit(): void {
    }
    onFileChange(event : FileChangedEvent){
       this.imageURL = event.url;
    }
    onFileInputError(event: string)
    {
      alert(event)
    }

}
