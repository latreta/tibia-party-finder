import { Component, OnInit } from '@angular/core';
import { TibiaService } from 'src/app/core/tibia.service';

@Component({
  selector: 'app-worlddetail',
  templateUrl: './worlddetail.component.html',
  styleUrls: ['./worlddetail.component.css']
})
export class WorlddetailComponent implements OnInit {
  worldName = 'Descubra';
  onlinePlayers = [];
  world = {};

  constructor(private tibiaService: TibiaService) { }

  ngOnInit(): void {
    this.RetrieveSelectedWorld(this.worldName);
  }

  RetrieveSelectedWorld = (worldName: string) => {
    this.tibiaService.GetWorld(worldName).subscribe((data) => {
      this.world = data.world.world_information;
      this.onlinePlayers = data.world.players_online;
    }, err => {
      console.error(err);
    });
  }

}
