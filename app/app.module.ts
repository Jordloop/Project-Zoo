import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ListAnimalComponent } from './list-animal.component';
import { AgePipe } from './age.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent,
                  ListAnimalComponent,
                  AgePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
