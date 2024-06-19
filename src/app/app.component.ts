import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ChampionsComponent } from './components/stats/champions.component';
import { ErgastService } from './services/ergast.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { StatsComponent } from './components/stats/stats.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ConstructorStandingsComponent } from './components/constructor-standings/constructor-standings.component';
import { DriverStandingsComponent } from './components/driver-standings/driver-standings.component';
import { LastRaceComponent } from './components/last-race/last-race.component';
import { MostWinsComponent } from './components/stats/mostwins.component';
import { PodiumsComponent } from './components/stats/podiums.component';
import { CircuitsComponent } from './components/circuits/circuits.component';
import { DriverStandingsTotalComponent } from './components/seasons/driverstandings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, ChampionsComponent, RouterModule, FormsModule, StatsComponent, NavbarComponent, HomeComponent, CircuitsComponent, CalendarComponent, ConstructorStandingsComponent, DriverStandingsComponent, LastRaceComponent, MostWinsComponent, PodiumsComponent, CircuitsComponent, DriverStandingsTotalComponent],
  providers: [ErgastService],
  templateUrl: 'app.component.html',
  styleUrls: ['styles/styleIndex.css']
})

export class AppComponent {
  title = 'f1Stats';
}
