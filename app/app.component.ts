import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Zoo</h1>
  <list-animal [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></list-animal>
  <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickSender)="finishedEditing()"></edit-animal>
  <add-animal [childAddAnimal]="selectedAddAnimal" (newAnimalSender)='addAnimal($event)'></add-animal>

  <button class="btn btn-info" (click)="addButtonClicked()">Add Animal</button>
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
    console.log(this.masterAnimalList);
  }


}
// (public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public like: string, public dislike: string)
