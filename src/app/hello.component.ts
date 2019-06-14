import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  // templateUrl: './parent/parent.component.html',
  template: `<h1>Hello {{nameHello_Child}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() nameHello_Child: string;
}
