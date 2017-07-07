import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedTask" class="Well">
    <h1>EDIT</h1>
  </div>
`
})

export class EditAnimalComponent {

}
