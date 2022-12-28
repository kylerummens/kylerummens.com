import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import * as Prism from 'prismjs';

@Directive({
  selector: '[highlight]'
})
export class PrismDirective implements OnChanges {

  @Input('highlight') code!: string;
  @Input('language') language!: string;

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  ngOnChanges(): void {
    const html = Prism.highlight(this.code.trim(), Prism.languages[this.language], this.language);
    this.elementRef.nativeElement.innerHTML = html;
    this.elementRef.nativeElement.classList.add('language-' + this.language);
  }

}
