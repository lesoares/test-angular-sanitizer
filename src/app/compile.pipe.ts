import { DomSanitizer } from '@angular/platform-browser';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'safeUrl' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    //return this.sanitized.bypassSecurityTrustHtml(value);
    //return this.sanitized.bypassSecurityTrustStyle(value);
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }
}
