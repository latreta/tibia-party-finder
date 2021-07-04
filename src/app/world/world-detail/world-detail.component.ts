import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TibiaService } from 'src/app/core/tibia.service';

@Component({
  selector: 'app-worlddetail',
  templateUrl: './world-detail.component.html',
  styleUrls: ['./world-detail.component.css']
})
export class WorldDetailComponent implements OnInit {
  worldName = '';
  onlinePlayers = [];
  world = {};

  constructor(private tibiaService: TibiaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.worldName = this.route.snapshot.paramMap.get('worldName') || '';
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
