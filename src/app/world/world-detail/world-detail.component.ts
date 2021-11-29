import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorldService } from 'src/app/core/services/world.service';

@Component({
  selector: 'app-worlddetail',
  templateUrl: './world-detail.component.html',
  styleUrls: ['./world-detail.component.css']
})
export class WorldDetailComponent implements OnInit {
  worldName = '';
  onlinePlayers = [];
  world = {};
  vocation = '';

  constructor(private worldService: WorldService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.worldName = this.route.snapshot.paramMap.get('worldName') || '';
    this.RetrieveSelectedWorld(this.worldName);
  }

  RetrieveSelectedWorld = (worldName: string) => {
    this.worldService.GetWorld(worldName).subscribe((data) => {
      this.world = data.world.world_information;
      this.onlinePlayers = data.world.players_online;
    }, err => {
      console.error(err);
    });
  }

  onChange = (event) => {
    this.vocation = event.value || '';
  }

}
