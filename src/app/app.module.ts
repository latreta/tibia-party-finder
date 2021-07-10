import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { WorldDetailComponent } from './world/world-detail/world-detail.component';
import { WorldListComponent } from './world/world-list/world-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './core/pipes/filter.pipe';
import { WorldCardComponent } from './world/world-card/world-card.component';
import { PlayerCardComponent } from './world/player-card/player-card.component';


@NgModule({
  declarations: [
    AppComponent,
    WorldListComponent,
    WorldDetailComponent,
    FilterPipe,
    WorldCardComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
