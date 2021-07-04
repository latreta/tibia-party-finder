import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldDetailComponent } from './world/world-detail/world-detail.component';
import { WorldListComponent } from './world/world-list/world-list.component';

const routes: Routes = [
  {path: 'worlds', component: WorldListComponent},
  {path: 'worlds/:worldName', component: WorldDetailComponent},
  {path: '', redirectTo: '/worlds', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
