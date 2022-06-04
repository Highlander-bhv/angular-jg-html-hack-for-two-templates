import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hack for two(2) HTML files for one(1) COMPONENT in {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
