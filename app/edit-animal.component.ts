import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal" class="Well">
    <div class="form-group">
      <label>Enter Animal's Name:</label>
      <input [(ngModel)]=childSelectedAnimal.name>
    </div>
    <div class="form-group">
      <label>Enter Animal's Age:</label>
      <input [(ngModel)]=childSelectedAnimal.age>
    </div>
    <div class="form-group">
      <label>Enter Animal's Location:</label>
      <input [(ngModel)]=childSelectedAnimal.location>
    </div>
    <div class="form-group">
      <label>Enter Animal's Caretakers:</label>
      <input [(ngModel)]=childSelectedAnimal.caretakers>
    </div>
    <div class="form-group">
      <label>Enter Animal's Likes:</label>
      <input [(ngModel)]=childSelectedAnimal.like>
    </div>
    <div class="form-group">
      <label>Enter Animal's Dislikes:</label>
      <input [(ngModel)]=childSelectedAnimal.dislike>
    </div>

      <button class="btn btn-info" (click)="doneButtonClicked()">Done</button>
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
