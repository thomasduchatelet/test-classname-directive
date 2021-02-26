import { Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[tstClass]"
})
export class NgxTestClassDirective {
  @Input() suffix: any;
  elementRef: ElementRef;
  constructor(private eleRef: ElementRef) {
    this.elementRef = eleRef;
  }

  ngAfterViewInit() {
    this.formatSuffix();
    let innertext = this.elementRef.nativeElement.tagName.toLowerCase();
    if(this.elementRef.nativeElement.childNodes.length === 0)
      innertext += '-' + this.formatText(this.elementRef.nativeElement.innerText);
    this.elementRef.nativeElement.className +=
      " tst-" + innertext + this.suffix;
  }

  formatText(text: string): string {
    text = text.toLowerCase();
    let textarray = text.split(" ");
    let newtext = textarray[0];
    textarray.shift();
    textarray.forEach(t => {
      newtext += "-" + t;
    });
    return newtext;
  }

  formatSuffix() {
    if (this.suffix == undefined) this.suffix = "";
    else this.suffix = "-" + this.suffix.toString();
  }
}