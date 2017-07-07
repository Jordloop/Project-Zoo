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
  <ul class="list-group">
    <li class="list-group-item"*ngFor="let currentAnimal of childAnimalList | age:filterByAge">
    <p>{{currentAnimal.name}}, {{currentAnimal.species}}, {{currentAnimal.age}}, {{currentAnimal.diet}}, {{currentAnimal.location}}, {{currentAnimal.caretakers}}, {{currentAnimal.sex}}, {{currentAnimal.like}}, {{currentAnimal.dislike}}</p>
    <button class="btn btn-info" (click)="editButtonClicked(currentAnimal)">Edit</button>
    </li>
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
