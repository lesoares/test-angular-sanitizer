import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('parent') parent: ElementRef;
  name = 'Angular';
  url = ``;
  trustedUrl;

  constructor(private _renderer: Renderer, private sanitizer: DomSanitizer) {}
  ngAfterViewInit() {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    // let htm = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    // //this.parent.nativeElement.innerHTML=this.html;
    // this._renderer.setElementProperty(
    //   this.parent.nativeElement,
    //   'innerHTML',
    //   htm
    // );
  }
}

//angular i18n
