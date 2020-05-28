import { Directive, ElementRef } from '@angular/core';
import { time } from 'rxjs';
import { map } from 'rxjs/operator';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {

  private arrayColor:Array<string>=['blue','green','red','brown','pink'];

  constructor(private el:ElementRef){
this.ChangeColor();
  }

  public ChangeColor(){
    let x = this.arrayColor[2]
    this.el.nativeElement.style.background = x
  }


}
