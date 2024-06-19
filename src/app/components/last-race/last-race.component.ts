import { Component, OnInit } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-last-race',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './last-race.component.html',
  styleUrls: ['./last-race.component.css'],
})
export class LastRaceComponent implements OnInit {
  lastRaceResults: any = {};

  constructor(private ergastService: ErgastService) {}

  ngOnInit() {
    this.ergastService.getLastRace().subscribe((res) => {
      this.lastRaceResults = res.MRData.RaceTable;
    });
  }
}
