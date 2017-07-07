import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component
({
  selector: 'list-animal',
  template: `
  <div class="form-group">
    <select (change)="filterList($event.target.value)">
      <option value="all">All</option>
      <option value="young">Young</option>
      <option value="mature">Mature</option>
    </select>
  </div>
  <ul class="list-group">
    <li class="list-group-item"*ngFor="let currentAnimal of childAnimalList | age:filterByAge">
      <div class="row">
        <div class="col-xs-6 col-md-3">
          <ul>
            <li>Name: {{currentAnimal.name}}</li>
            <li>Species: {{currentAnimal.species}}</li>
            <li>Age: {{currentAnimal.age}}</li>
            <li>Diet: {{currentAnimal.diet}}</li>
            <li>Location: {{currentAnimal.location}}</li>
          </ul><br>
        </div>
        <div class="col-xs-6 col-md-3">
          <ul>
            <li>Caretakers: {{currentAnimal.caretakers}}</li>
            <li>Sex: {{currentAnimal.sex}}</li>
            <li>Likes: {{currentAnimal.like}}</li>
            <li>Dislikes: {{currentAnimal.dislike}}</li>
          </ul>
        </div>
      </div>
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
