import { Component, OnInit } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-driver-standings',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './driver-standings.component.html',
  styleUrls: ['./driver-standings.component.css'],
})
export class DriverStandingsComponent implements OnInit {
  driverStandings: any = {};

  constructor(private ergastService: ErgastService) {}

  ngOnInit() {
    this.ergastService.getDriverStandings(2024).subscribe((res) => {
      this.driverStandings = res.MRData.StandingsTable.StandingsLists;
    });
  }
}
