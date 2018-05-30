import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

@Input() HighlightColor: string;

@Input() DefaultColor: string;

@HostBinding('style.backgroundColor') backgroundColor: string = this.DefaultColor;
  constructor( private eleRf: ElementRef, private  renderer: Renderer2) { 

  }
ngOnInit(){

}

@HostListener('mouseenter') onMouseEnter() {
  this.backgroundColor = this.HighlightColor;
}

@HostListener('mouseleave') onMouseLeave() {
  this.backgroundColor = this.DefaultColor;
}


}
