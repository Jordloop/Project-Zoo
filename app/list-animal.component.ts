import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component
({
  selector: 'list-animal',
  template: `
  <select (change)="filterList$event.target.value)">
    <option value="all">All</option>
    <option value="young">Young</option>
    <option value="mature">Mature<</option>
  </select>
  <ul>
  <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}}, {{currentAnimal.species}}, {{currentAnimal.age}}, {{currentAnimal.diet}}, {{currentAnimal.location}}, {{currentAnimal.caretakers}}, {{currentAnimal.sex}}, {{currentAnimal.like}}, {{currentAnimal.dislike}}</li>
  </ul>
  `
})

export class ListAnimalComponent {
  @Input() childAnimalList: Animal[];

filterByAge: string = "all";

  filterList(menuOption) {
    this.filterByAge = menuOption;
  }
}
