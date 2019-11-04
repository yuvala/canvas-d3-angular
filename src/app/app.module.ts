import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { BarchartComponent } from './barchart/barchart.component';
import { HttpClientModule } from '@angular/common/http';
import { CanvasChartComponent } from './canvas-chart/canvas-chart.component';
import { DomtocanvasComponent } from './domtocanvas/domtocanvas.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    BarchartComponent,
    CanvasChartComponent,
    DomtocanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
