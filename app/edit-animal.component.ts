import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal" class="Well">
    <h1>EDIT</h1>
    <label>Enter Animal Name:</label>
    <input [(ngModel)]=childSelectedAnimal.name>
    <button (click)="doneButtonClicked()">Done</button>
  </div>

`
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickSender.emit();
  }
}
