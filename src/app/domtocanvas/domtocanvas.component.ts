import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-domtocanvas',
  templateUrl: './domtocanvas.component.html',
  styleUrls: ['./domtocanvas.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DomtocanvasComponent implements OnInit {
  @ViewChild('dtc', { static: true }) private canvasContainer: ElementRef;
  width = 960;
  height = 500;
  container;
  constructor() {}

  ngOnInit() {
    this.create();
  }

  create() {
    // Register the "custom" namespace prefix for our custom elements.
    d3.namespaces.custom = 'https://d3js.org/namespace/custom';
    this.container = this.canvasContainer.nativeElement;
debugger;
    // Add our "custom" sketch element to the body.
    const sketch = d3
      .select(this.container)
      .append('custom:sketch')
      .attr('width', this.width)
      .attr('height', this.height)
      .call(custom);

    // On each mouse move, create a circle that increases in size and fades away.
    d3.select(this.container).on('mousemove', () => {
      console.log(d3.event.clientX);
      sketch
        .append('custom:circle')
        .attr('x', d3.event.clientX)
        .attr('y', d3.event.clientY - 70)
        .attr('radius', 0)
        .attr('strokeStyle', 'red')
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr('radius', 200)
        .attr('strokeStyle', 'white')
        .remove();
    });

    function custom(selection) {
      selection.each(function() {
        const root = this;
        const canvas = root.parentNode.appendChild(
          document.createElement('canvas')
        );
        const context = canvas.getContext('2d');

        // canvas.style.position = 'absolute';
        // canvas.style.top = root.offsetTop + 'px';
        // canvas.style.left = root.offsetLeft + 'px';

        // It'd be nice to use DOM Mutation Events here instead.
        // However, they appear to arrive irregularly, causing choppy animation.
        d3.timer(redraw);

        // Clear the canvas and then iterate over child elements.
        function redraw() {
          canvas.width = root.getAttribute('width');
          canvas.height = root.getAttribute('height');
          for (let child = root.firstChild; child; child = child.nextSibling) {
            draw(child);
          }
        }
        // For now we only support circles with strokeStyle.
        // But you should imagine extending this to arbitrary shapes and groups!
        function draw(element) {
          switch (element.tagName) {
            case 'circle': {
              context.strokeStyle = element.getAttribute('strokeStyle');
              context.beginPath();
              context.arc(
                element.getAttribute('x'),
                element.getAttribute('y'),
                element.getAttribute('radius'),
                0,
                2 * Math.PI
              );
              context.stroke();
              break;
            }
          }
        }
      });
    }
  }
}
