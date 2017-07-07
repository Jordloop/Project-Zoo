import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component
({
  selector: 'list-animal',
  template: `
  <ul>
  <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}} {{currentAnimal.species}}</li>
  </ul>
  `
})

export class ListAnimalComponent {
  @Input() childAnimalList: Animal[];
}
