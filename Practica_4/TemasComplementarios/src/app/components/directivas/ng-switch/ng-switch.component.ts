import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [
  ]
})
export class NgSwitchComponent implements OnInit {

  public people:any[]=[
    {
      name:"Douglas Pace",
      age:35,
      contry: 'Mars',
    },
    {
      name:"Raz Jr",
      age:30,
      contry: 'Rusia',
    },
    {
      name:"Yoav",
      age:19,
      contry: 'Rusia',
    },
    {
      name:"Ray",
      age:28,
      contry: 'Canada',
    },
    {
      name:"JJRA",
      age:28,
      contry: 'USA',
    },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
