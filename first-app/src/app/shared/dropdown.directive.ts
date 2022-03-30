import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
/* Creating a class that is a directive. */
@Directive({
  selector: '[appDropdown]'
})

  /*actions for manage button*/
export class DropdownDirective {
  /* Adding a class to the element that the directive is placed on. */
  @HostBinding('class.open') isOpen = false;
  
  /* Listening for events on the host element. */
 /* This is listening for clicks on the document and then toggling the open state of the dropdown. */
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    /*'?:' (conditional, "ternary") operator, shortcut for if/else statment */
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {

  } 
}