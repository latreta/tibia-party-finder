import { Component, OnInit } from '@angular/core';
import { WorldService } from 'src/app/core/services/world.service';

@Component({
  selector: 'app-worldlist',
  templateUrl: './world-list.component.html',
  styleUrls: ['./world-list.component.css']
})
export class WorldListComponent implements OnInit {
  worlds = [];
  typeWorld = '';

  constructor(private worldService: WorldService){
  }

  ngOnInit(): void {
    this.RetrieveListOfWorlds();
  }

  RetrieveListOfWorlds = () => {
    this.worldService.GetWorlds().subscribe((data: any) => {
      this.worlds = data.worlds.allworlds;
    }, err => console.error(err));
  }

  onChange = ($event) => {
    this.typeWorld = $event.target.value;
  }

}
