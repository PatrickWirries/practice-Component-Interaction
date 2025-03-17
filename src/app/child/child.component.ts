import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  //Output variable with EventEmitter to help send output from child to parent
  @Output() outputValue: EventEmitter<string> = new EventEmitter<string>();
  message:string = '';

  //Input Binding, variable to be updated from parent's actions
  @Input() inputText:string = '';

 sendMessage(text:string){
  this.message = text;
    this.outputValue.emit(this.message);
  }
}
