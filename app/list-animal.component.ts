import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component
({
  selector: 'list-animal',
  template: `
  <ul>
  <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}}, {{currentAnimal.species}}, {{currentAnimal.age}}, {{currentAnimal.diet}}, {{currentAnimal.location}}, {{currentAnimal.caretakers}}, {{currentAnimal.sex}}, {{currentAnimal.like}}, {{currentAnimal.dislike}}</li>
  </ul>
  `
})

export class ListAnimalComponent {
  @Input() childAnimalList: Animal[];
}
