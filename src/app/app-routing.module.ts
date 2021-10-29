import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { TournamentComponent } from './tournament/tournament.component';
import { LeaderbordComponent } from './leaderbord/leaderbord.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'tournament',component:TournamentComponent},
  {path:'leaderbord',component:LeaderbordComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
