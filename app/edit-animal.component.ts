import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal" class="Well">
    <h1>EDIT</h1>

    <label>Enter Animal's Name:</label>
    <input [(ngModel)]=childSelectedAnimal.name>
    <label>Enter Animal's Age:</label>
    <input [(ngModel)]=childSelectedAnimal.age>
    <label>Enter Animal's Location:</label>
    <input [(ngModel)]=childSelectedAnimal.location>
    <label>Enter Animal's Caretakers:</label>
    <input [(ngModel)]=childSelectedAnimal.caretakers>
    <label>Enter Animal's Likes:</label>
    <input [(ngModel)]=childSelectedAnimal.like>
    <label>Enter Animal's Dislikes:</label>
    <input [(ngModel)]=childSelectedAnimal.dislike>
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
