import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-world-card',
  templateUrl: './world-card.component.html',
  styleUrls: ['./world-card.component.css']
})
export class WorldCardComponent implements OnInit {
  @Input()
  world: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
