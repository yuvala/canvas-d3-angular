import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { BarchartComponent } from './barchart/barchart.component';
import { CanvasChartComponent } from './canvas-chart/canvas-chart.component';
import { DomtocanvasComponent } from './domtocanvas/domtocanvas.component';

const routes: Routes = [
  // { path: 'graph', component: GraphComponent },

  // { path: 'barChart', component: BarchartComponent },
  { path: 'domtocanvas', component: DomtocanvasComponent },
  {
    path: '**',
    component: CanvasChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
