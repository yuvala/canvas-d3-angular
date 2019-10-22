import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  constructor() {}
  public config = { height: 10, width: 10 };
  @ViewChild('cnv', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private defaultSize = 600;

  ngOnInit() {
    this.config.height = this.defaultSize;
    this.config.width = this.defaultSize;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.refresh();
  }

  refresh() {
    console.log('refreshhing');
    this.draw(4, 4, 50);
  }

  onResize(event) {
    console.log('onResize', event.target.innerWidth);
    this.draw(4, 4, 50);
  }

  draw(x: number, y: number, z: number) {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(z * x, z * y, z, z);
  }
  reaizeCanvas(size) {
    if (this.defaultSize > size) {
      this.config.height = size;
      this.config.width = size;
    } else {
      this.config.height = this.defaultSize;
      this.config.width = this.defaultSize;
    }
    console.log('onResize', this.config);
  }
}
