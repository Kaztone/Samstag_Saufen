import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlipCardModule } from './flip-card/flip-card.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FlipCardBackComponent } from './flip-card/flip-card-back';
import { StartSeiteComponent } from './start-seite/start-seite.component';
import { AddViewComponent } from './add-view/add-view.component';


@NgModule({
  declarations: [
    AppComponent,
    StartSeiteComponent,
    AddViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlipCardModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
