import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParagraph]'
})
export class PDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    ) { }

    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightgray');
        this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '1rem');
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '0.5rem');
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '90%');
    }
}