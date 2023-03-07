import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

export interface FileChangedEvent {
  file: File,
  url?: string
}

@Directive({
  selector: '[fileInput]',
  exportAs: "fileControl"
})
export class FileInputDirective implements OnInit {
  private inputRef!: HTMLInputElement;

  private _mine: string[] = [];
  @Input()
  set mine(valueOrList: string | string[]) {
    this._mine = Array.isArray(valueOrList) ? valueOrList : [valueOrList];
  }

  @Input('size') allowedSize: string | number = 0;

  value?: File;
  isImage = false;
  fileName?: string;
  fileUrl?: string;

  @Output() fileChanged = new EventEmitter<FileChangedEvent>();
  @Output() error = new EventEmitter<string>();

  constructor(private readonly elemRef: ElementRef) {
    this.inputRef = this.elemRef.nativeElement;

  }
  ngOnInit() {
    //this.inputRef.addEventListener("change", () => this.onFileInputChange())
  }
  /*@HostBinding("class.hide")
  get hide(){
    return !!this.value;
  }*/
  @HostBinding("style.display")
  get styleDisplay() {
    return !!this.value ? "none" : "block";
  }
  @HostListener('change', ["$event.target.files"])
  private async onFileInputChange(files: FileList) {
    const file = files?.item(0);
    if (!file)
      return;
    const validationResult = this.validateFile(file);
    if (!validationResult.isValid) {
      this.clean();
      this.error.emit(validationResult.message);
      return;
    }
    this.value = file;
    this.fileName = file.name;
    this.isImage = !!file.type.match(/image(\/jp?g|png|bmp|gif)?/);
    this.fileUrl = this.isImage ? await this.convertToURL(file) : undefined;
    this.fileChanged.emit({ file: this.value, url: this.fileUrl })
  }
  private convertToURL(file: File) {
    debugger
    return new Promise<string>((resolve, reject) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = () => resolve(fr.result as string);
    });
  }
  public triggerChange() {
    this.inputRef.click();
  }
  public removeFile() {
    this.clean();
  }
  private validateFile(file: File) {
    debugger
    const fileType = file.type;
    const fileSize = +(file.size / (1024 * 1024)).toFixed(2);
    const isSizeValid = this.allowedSize <= 0 || fileSize <= (+this.allowedSize || 0);
    if (!isSizeValid) {
      return {
        isValid: false,
        message: `Large size: Allowed size is ${this.allowedSize}`,
      };
    }
    const isMineValid = this._mine.length === 0 || this._mine.some(m => fileType.includes(m))
    if (!isMineValid) {
      return {
        isValid: false,
        message: `Media type not allowed. Allowed type(s) ${this._mine.join(", ")}`,
      };
    }
    return {
      isValid: true,
    }
  }
  private clean() {
    this.value = undefined;
    this.inputRef.value = null as unknown as string;
    this.isImage = false;
    this.fileName = undefined;
    this.fileUrl = undefined;
  }
}