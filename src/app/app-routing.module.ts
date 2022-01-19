import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartSeiteComponent } from './../app/start-seite/start-seite.component';
import { FlipCardComponent } from './../app/flip-card/flip-card.component';

const routes: Routes = [
  { path: 'main', component: StartSeiteComponent },
  { path: 'flip', component: FlipCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
