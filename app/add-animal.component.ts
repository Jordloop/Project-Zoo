import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component
({
  selector: 'add-animal',
  template: `
  <div *ngIf="childAddAnimal" class="Well">
    <h1>New Animal</h1>
    <div class="form-group">
      <label>Species:</label>
      <input #newSpecies required>
    </div>
    <div class="form-group">
      <label>Name:</label>
      <input #newName required>
    </div>
    <div class="form-group">
      <label>Age:</label>
      <input #newAge type="number" required>
    </div>
    <div class="form-group">
      <label>Location:</label>
      <input #newLocation required>
    </div>
    <div class="form-group">
      <label>Like:</label>
      <input #newLikes required>
    </div>
    <div class="form-group">
      <label>Dislike:</label>
      <input #newDislikes required>
    </div>
    <div class="form-group">
      <label>Caretakers:</label>
      <select #newCaretakers>
        <option [value]="1"> 1 </option>
        <option [value]="2"> 2 </option>
        <option [value]="3"> 3 </option>
        <option [value]="4"> 4 </option>
        <option [value]="5"> 5 </option>
      </select>
    </div>
    <div class="form-group">
      <label>Diet:</label>
      <select #newDiet>
        <option> Carnivore </option>
        <option> Herbivore </option>
        <option> Omnivore </option>
      </select>
    </div>
    <div class="form-group">
      <label>Sex:</label>
      <select #newSex>
        <option> Female </option>
        <option> Male </option>
      </select>
    </div>

    <button class="btn btn-success" (click)="sumbitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value)">Done</button>
  </div>
  `
})

export class AddAnimalComponent {
  @Input() childAddAnimal: Animal;
  @Output() newAnimalSender = new EventEmitter();

  sumbitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: string, sex: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
