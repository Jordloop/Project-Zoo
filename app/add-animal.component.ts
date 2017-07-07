import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component
({
  selector: 'add-animal',
  template: `
  <div *ngIf="childAddAnimal" class="Well">
    <h1>New Animal</h1>
    <label>Species:</label>
    <input #newSpecies>
    <label>Name:</label>
    <input #newName>
    <label>Age:</label>
    <input #newAge type="number">
    <label>Location:</label>
    <input #newLocation>
    <label>Like:</label>
    <input #newLikes>
    <label>Dislike:</label>
    <input #newDislikes>

    <label>Caretakers:</label>
    <select #newCaretakers>
      <option [value]="1"> 1 </option>
      <option [value]="2"> 2 </option>
      <option [value]="3"> 3 </option>
      <option [value]="4"> 4 </option>
      <option [value]="5"> 5 </option>
    </select>
    <label>Diet:</label>
    <select #newDiet>
      <option> Carnivore </option>
      <option> Herbivore </option>
      <option> Omnivore </option>
    </select>
    <label>Sex:</label>
    <select #newSex>
      <option> Female </option>
      <option> Male </option>
    </select>

    <button (click)="sumbitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value)">Done</button>
  </div>
  `
})

export class AddAnimalComponent {
  @Input() childAddAnimal: Animal;
  @Output() newAnimalSender = new EventEmitter();

  sumbitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: string, sex: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    console.log(newAnimal);
    this.newAnimalSender.emit(newAnimal);
  }
}
