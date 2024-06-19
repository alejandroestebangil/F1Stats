import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ChampionsComponent } from './components/stats/champions.component';
import { StatsComponent } from './components/stats/stats.component';
import { error404Component } from './error404.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ConstructorStandingsComponent } from './components/constructor-standings/constructor-standings.component';
import { DriverStandingsComponent } from './components/driver-standings/driver-standings.component';
import { LastRaceComponent } from './components/last-race/last-race.component';
import { MostWinsComponent } from './components/stats/mostwins.component';
import { MostPolesComponent } from './components/stats/mostpoles.component';
import { PodiumsComponent } from './components/stats/podiums.component';
import { DriverStandingsTotalComponent } from './components/seasons/driverstandings.component';
import { CircuitsComponent } from './components/circuits/circuits.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'Stats', component: StatsComponent },
    { path: 'Champions', component: ChampionsComponent },
    { path: 'Calendar', component: CalendarComponent },
    { path: 'ConstructorStandings', component: ConstructorStandingsComponent },
    { path: 'DriverStandings', component: DriverStandingsComponent },
    { path: 'LastRace', component: LastRaceComponent },
    { path: 'Winners', component: MostWinsComponent },
    { path: 'Polesitters', component: MostPolesComponent },
    { path: 'Podiums', component: PodiumsComponent },
    { path: 'Seasons', component: DriverStandingsTotalComponent },
    { path: 'Circuits', component: CircuitsComponent },
    { path: '**', component: error404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }