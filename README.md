# Project-Zoo 7/7/2017


#### **By Jordan Loop**

## Description

User is able to fill out a form to create a new Animal object. User is able to view a list of all Animal objects or view a filtered list of Animal objects. User is able to update an existing Animal object.

## Behavior, Inputs, and Output

| Behavior handledBy this program:                                | Input exampleWhen it receives:                                                                                    | Output exampleIt should return:                                        |
|-----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| User can view all animals.                                      | none                                                                                                              | A list of animals is displayed.                                        |
| User can view all animals that are  younger than two years old. | Select "Young" as dropdown option                                                                                 | A list of each animal that is younger than two years old is displayed. |
| User can view all animals that are two years old or older.      | Select "Mature" as dropdown option                                                                                | A list of each animal that is two years old or older is displayed.     |
| .User can click on an animal to view a form to edit the animal. | Click on an animal                                                                                                | A form is rendered.                                                    |
| User can edit animal's name, age or caretakers.                 | "Jerry" "3" "4"                                                                                               | Animal's name, ate, and caretakers are changed to what user inputted.  |
| User can fill out a form to add a new animal.                   | User provides species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike. | The new animal is added to the list of displayed animals.              |

## Setup/Installation Requirements

* Open you computer's terminal and navigate to desktop.
* While located in desktop execute the following command in the terminal:
  <pre>git clone https://github.com/Jordloop/Project-Zoo</pre>
* Navigate to the cloned repository (should be on desktop).
* While in the top level of the cloned repository's directory execute the following two commands:
  <pre>bower install</pre>
  <pre>npm install</pre>
* Run the following command in the terminal to use application:
  <pre>gulp serve</pre>
  
## Known Bugs

* No known bugs

## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact through Github.

## Technologies Used

* Typescript
* HTML
* BootStrap
* Angular 2


### License
Copyright (c) 2017 Jordan Loop, Epicodus
