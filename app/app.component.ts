import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="page-header">
    <div class="container">
      <h1>Zoo Animals</h1>
    </div>
  </div>
  <div class="container">
    <list-animal [childAnimalList]="masterAnimalList"  (clickSender)="editAnimal($event)"></list-animal>
    <h1>Edit</h1>
    <hr>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickSender)="finishedEditing()"></edit-animal>

    <button class="btn btn-primary btn-sm" (click)="addButtonClicked()">Add Animal</button><br>
    <add-animal [childAddAnimal]="selectedAddAnimal" (newAnimalSender)='addAnimal($event)'></add-animal>
  </div>
  `
})

export class AppComponent {

  masterAnimalList: Animal[] = [
    new Animal('Cat', 'Wiskers', 4, 'Carnivore', 'Cat Island', "1", 'Male', 'Sleep', 'Dogs'),
    new Animal('Monkey', 'Roger', 2, 'Omnivor', 'Monkey Tree', "1", 'Male', 'Playing', 'Loud Noises'),
    new Animal('Shark', 'Rachel', 1, 'Carnivore', 'Shark Tank', "2", 'Female', 'Eating', 'Not eating')
  ];

  selectedAnimal: boolean = null;
  selectedAddAnimal: boolean = null;

  addButtonClicked() {
    this.selectedAddAnimal = true;
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
    this.selectedAddAnimal = null;
  }
}
