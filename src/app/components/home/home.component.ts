import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ConstructorStandingsComponent } from '../constructor-standings/constructor-standings.component';
import { DriverStandingsComponent } from '../driver-standings/driver-standings.component';
import { LastRaceComponent } from '../last-race/last-race.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ChampionsComponent } from '../stats/champions.component';
import { StatsComponent } from '../stats/stats.component';
import { MostWinsComponent } from '../stats/mostwins.component';
import { CircuitsComponent } from '../circuits/circuits.component';
import { DriverStandingsTotalComponent } from '../seasons/driverstandings.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, ConstructorStandingsComponent, DriverStandingsTotalComponent, CircuitsComponent, FormsModule, LastRaceComponent, DriverStandingsComponent, CalendarComponent, NavbarComponent, ChampionsComponent, StatsComponent, MostWinsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  // NEXT RACE
  nextRace: any = {};
  nextRaceTime: string = '';
  nextRaceUTCtime: string = '';

  nextRaceTimeDate: string;

  // Text format for countdown
  text: any = {
    Year: 'Y',
    Month: 'M',
    Weeks: 'W',
    Days: 'Days',
    Hours: 'Hours',
    Minutes: 'Mins',
    Seconds: 'Secs',
    MilliSeconds: 'ms',
  };

  // DRIVERS STANDINGS
  driverStandings: any = {};

  // CONSTRUCTOR STANDINGS
  constructorStandings: any = {};

  // LAST RACE
  lastRaceResults: any = {};

  // Inject dataservice as dependency
  constructor(private ergastService: ErgastService) {}

  //
  userTheme: string = null;

  ngOnInit() {

    // NEXT RACE INFO
    this.ergastService.getNextRace().subscribe((res) => {
      this.nextRace = res.MRData.RaceTable.Races;

      this.nextRaceTimeDate = this.nextRaceTime.concat(
        res.MRData.RaceTable.Races[0].date,
        'T',
        res.MRData.RaceTable.Races[0].time
      );

      this.nextRaceUTCtime = res.MRData.RaceTable.Races[0].time.slice(0, -4);

    });

    // DRIVERS STANDINGS
    this.ergastService.getDriverStandings(2024).subscribe((res) => {
      if (res && res.MRData && res.MRData.StandingsTable && res.MRData.StandingsTable.StandingsLists) {
        this.driverStandings = res.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(0, 5);
      }
    });

    // CONSTRUCTORS STANDINGS
    this.ergastService.getConstructorStandings().subscribe((res) => {
      if (res && res.MRData && res.MRData.StandingsTable && res.MRData.StandingsTable.StandingsLists) {
        this.constructorStandings = res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.slice(0, 5);
      }
    });

    // SOLO MUESTRA LOS 3 PRIMEROS STANDINGS
    this.ergastService.getLastRace5().subscribe((res) => {
      this.lastRaceResults = res.MRData.RaceTable;
    });
  }
}
