import { Component, OnInit } from '@angular/core';
import { TibiaService } from 'src/app/core/tibia.service';

@Component({
  selector: 'app-worldlist',
  templateUrl: './worldlist.component.html',
  styleUrls: ['./worldlist.component.css']
})
export class WorldlistComponent implements OnInit {
  worlds = [];

  constructor(private tibiaService: TibiaService){
  }

  ngOnInit(): void {
    this.RetrieveListOfWorlds();
  }

  RetrieveListOfWorlds = () => {
    this.tibiaService.GetWorlds().subscribe((data: any) => {
      this.worlds = data.worlds.allworlds;
    }, err => console.error(err));
  }

  onChange = ($event) => {
    console.dir($event.target);
  }

}
