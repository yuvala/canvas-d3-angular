import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'canvas-d3-angular';
  chartData: Array<any>;
  messages = this.http.get<any[]>('http://localhost:5000/');
  constructor(private router: Router, private http: HttpClient) {
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 5000);
    }, 1000);
  }

  btnClick(path) {
    this.router.navigateByUrl(`/${path}`);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < 8 + Math.floor(Math.random() * 10); i++) {
      this.chartData.push([`Index ${i}`, Math.floor(Math.random() * 100)]);
    }
  }
}
