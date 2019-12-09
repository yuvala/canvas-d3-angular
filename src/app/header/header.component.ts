import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private service: AppService) {}

  ngOnInit() {}

  handleClick(param) {
    const p = param;
    this.service.get(param).subscribe(
      res => {
        if (p === '/graph') {
        //  this.data.chartData = res[0].data;
         // this.messages = res[0].data;
        }
        console.log(this, p);

       // this.messages = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
