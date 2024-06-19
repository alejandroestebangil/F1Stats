import { Component, OnInit } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-driver-standings',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
    templateUrl: './driverstandings.component.html',
    styleUrls: ['./driverstandings.component.css'],
})
export class DriverStandingsTotalComponent implements OnInit {
    driverStandings: any = {};
    selectedYear: number;
    years: number[] = [];

    constructor(private ergastService: ErgastService) {
        this.selectedYear = new Date().getFullYear();
        for (let year = 1950; year <= this.selectedYear; year++) {
            this.years.push(year);
        }
    }

    ngOnInit() {
        this.getStandings(this.selectedYear);
    }

    onYearChange() {
        this.getStandings(this.selectedYear);
    }

    getStandings(year: number) {
        this.ergastService.getDriverStandings(year).subscribe((res) => {
            this.driverStandings = res.MRData.StandingsTable.StandingsLists;
        });
    }
}
