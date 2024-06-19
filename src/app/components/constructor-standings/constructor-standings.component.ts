import { Component, OnInit } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-constructor-standings',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './constructor-standings.component.html',
  styleUrls: ['./constructor-standings.component.css'],
})
export class ConstructorStandingsComponent implements OnInit {
  constructorStandings: any = {};

  constructor(private ergastService: ErgastService) {}

  ngOnInit() {
    this.ergastService.getConstructorStandings().subscribe((res) => {
      this.constructorStandings = res.MRData.StandingsTable.StandingsLists;
    });
  }
}
