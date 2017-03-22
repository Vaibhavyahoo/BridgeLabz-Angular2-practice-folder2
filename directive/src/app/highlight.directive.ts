import { Directive ,HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
  };
  @HostListener ('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };
  @Input() defaultColor='white';
  @Input() highlightColor='green';
private backgroundColor =this.defaultColor;
  constructor() {
// //this.elementRef.nativeElement.style.backgroundColor = 'green';
//   }

}
}
