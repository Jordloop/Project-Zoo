import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AddAnimalComponent } from './add-animal.component';
import { EditAnimalComponent } from './edit-animal.component';
import { ListAnimalComponent } from './list-animal.component';
import { AgePipe } from './age.pipe';

@NgModule({
  imports: [BrowserModule,
            FormsModule],
  declarations: [ AppComponent,
                  AddAnimalComponent,
                  EditAnimalComponent,
                  ListAnimalComponent,
                  AgePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
