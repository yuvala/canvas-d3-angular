import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  Input,
  IterableDiffers,
  DoCheck
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarchartComponent implements OnInit, DoCheck {
  public chartData: Array<any>;
  differ: any;

  @ViewChild('chart', { static: true }) private chartContainer: ElementRef;
  @Input() public data: Array<any>;
  private svg;
  private element;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20 };
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;

  constructor(differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
  }

  ngDoCheck() {
    // const change = this.differ.diff(this.data);
    // console.log(change);
    // this.updateChart();
    // here you can do what you want on array change
    // you can check for forEachAddedItem or forEachRemovedItem on change object to see the added/removed items
    // Attention: ngDoCheck() is triggered at each binded variable on componenet;
    // if you have more than one in your component, make sure you filter here the one you want.
  }
  ngOnInit() {
    // this.generateData();
    this.createBase();
    this.createChart();
    if (this.data) {
      this.updateChart();
    }
  }

  createBase() {
    this.element = this.chartContainer.nativeElement;
    this.width =
      this.element.offsetWidth - this.margin.left - this.margin.right;
    this.height = 200; // element.offsetHeight - this.margin.top - this.margin.bottom || 200;
    this.svg = d3.select(this.element).append('svg');

    this.updateBase();
  }
  updateBase() {
    this.svg
      .attr('width', this.element.offsetWidth)
      .attr('height', 400); // this.element.offsetHeight);
    // chart plot area
    this.chart = this.svg
      .append('g')
      .attr('class', 'bars')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
  }
  createChart() {
    // define X & Y domains
    const xDomain = this.data.map(d => {
      return d[0];
    });
    const yDomain = [0, d3.max(this.data, d => d[1])];

    // create scales
    this.xScale = d3
      .scaleBand()
      .padding(0.1)
      .domain(xDomain)
      .rangeRound([0, this.width]);
    this.yScale = d3
      .scaleLinear()
      .domain(yDomain)
      .range([this.height, 0]);

    // bar colors
    this.colors = d3
      .scaleLinear()
      .domain([0, this.data.length])
      .range(['red', 'blue'] as any[]);

    // x & y axis
    this.xAxis = this.svg
      .append('g')
      .attr('class', 'axis axis-x')
      .attr(
        'transform',
        `translate(${this.margin.left}, ${this.margin.top + this.height})`
      )
      .call(d3.axisBottom(this.xScale));
    this.yAxis = this.svg
      .append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScale));
  }
  updateChart() {
    // update scales & axis
    this.xScale.domain(
      this.data.map(d => {
        return d[0];
      })
    );
    this.yScale.domain([0, d3.max(this.data, d => d[1])]);
    this.colors.domain([0, this.data.length]);
    this.xAxis.transition().call(d3.axisBottom(this.xScale));
    this.yAxis.transition().call(d3.axisLeft(this.yScale));

    const update = this.chart.selectAll('.bar').data(this.data);

    // remove exiting bars
    update.exit().remove();

    // update existing bars
    this.chart
      .selectAll('.bar')
      .transition()
      .attr('x', d => {
        return this.xScale(d[0]);
      })
      .attr('y', d => this.yScale(d[1]))
      .attr('width', d => this.xScale.bandwidth())
      .attr('height', d => {
        // console.log(this.height - this.yScale(d[1]));
        return this.height - this.yScale(d[1]);
      })
      .style('fill', (d, i) => this.colors(i));

    // add new bars
    update
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => {
        // console.log('this.xScale(d[0])', this.xScale(d[0]));
        return this.xScale(d[0]);
      })
      .attr('y', d => {
        // console.log('this.yScale(0)', this.yScale(0));
        return this.yScale(0);
      })
      .attr('width', this.xScale.bandwidth())
      .attr('height', 0)
      .style('fill', (d, i) => this.colors(i))
      .transition()
      .delay((d, i) => i * 10)
      .attr('y', d => this.yScale(d[1]))
      .attr('height', d => this.height - this.yScale(d[1]));
  }

  onResize(event) {
    console.log('onResize', event.target.innerWidth);
    // this.updateBase();
    this.createChart();
    this.updateChart();
  }
}
