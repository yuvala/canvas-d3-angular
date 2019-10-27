import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'canvas-d3-angular';
  private baseUrl = 'http://localhost:5000';

  chartData: Array<any>;
  public messages: any; // = this.http.get<any[]>(`${this.baseUrl}/users`);

  constructor(private router: Router, private service: AppService) {
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

  handleClick(param) {
    this.service.get(param).subscribe(res => {
      console.log(res);
      this.messages = res;
    },
    err => {
      console.log(err);
    });
  }
}
