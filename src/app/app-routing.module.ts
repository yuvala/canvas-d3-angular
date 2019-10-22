import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { BarchartComponent } from './barchart/barchart.component';


const routes: Routes = [
  { path: 'graph', component: GraphComponent },
  { path: 'barChart', component: BarchartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
