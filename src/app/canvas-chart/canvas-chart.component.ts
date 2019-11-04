import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit
} from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-canvas-chart',
  templateUrl: './canvas-chart.component.html',
  styleUrls: ['./canvas-chart.component.scss']
})
export class CanvasChartComponent implements OnInit, AfterViewInit {
  @ViewChild('cnv', { static: true }) private chartContainer: ElementRef;
  @Input() public data: Array<any>;

  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.createCanvas();
  }
  createCanvas() {
    // const element = this.chartContainer.nativeElement;
    // const canvas = element.insertAdjacentHTML('beforeend', '<canvas></canvas>');
    // // this.renderer.appendChild(element, child);
    // const ctx = canvas.getContext('2d');
    // console.log('element', element, canvas);
    const element = this.chartContainer.nativeElement;
    // this.width = element.offsetWidth ;
    // this.height = 200; // element.offsetHeight - this.margin.top - this.margin.bottom || 200;
    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);
  }
}
