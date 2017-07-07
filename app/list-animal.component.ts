import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component
({
  selector: 'list-animal',
  template: `
  <select (change)="filterList($event.target.value)">
    <option value="all">All</option>
    <option value="young">Young</option>
    <option value="mature">Mature</option>
  </select>
  <ul>
  <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{currentAnimal.name}}, {{currentAnimal.species}}, {{currentAnimal.age}}, {{currentAnimal.diet}}, {{currentAnimal.location}}, {{currentAnimal.caretakers}}, {{currentAnimal.sex}}, {{currentAnimal.like}}, {{currentAnimal.dislike}}</li>
  <button (click)="editButtonClicked(currentAnimal)">Edit</button>
  </ul>
  `
})

export class ListAnimalComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "all";

  filterList(menuOption) {
    this.filterByAge = menuOption;
  }

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
