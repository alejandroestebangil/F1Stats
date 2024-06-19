import { Component, OnInit, NgModule } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-most-races',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule],
    templateUrl: './mostwins.component.html',
    styleUrls: ['./stats.component.css']
})
export class MostWinsComponent implements OnInit {
    drivers: any[] = [];

    constructor(private ergastService: ErgastService) { }

    ngOnInit(): void {
        this.ergastService.getRaceWinners().subscribe(data => {
            const driversMap = new Map();

            data.forEach(race => {
                race.Results.forEach(result => {
                    if (result.position === "1") {
                        const driverId = result.Driver.driverId;
                        if (!driversMap.has(driverId)) {
                            driversMap.set(driverId, {
                                name: `${result.Driver.givenName} ${result.Driver.familyName}`,
                                nationality: result.Driver.nationality,
                                wins: 0
                            });
                        }
                        const driverData = driversMap.get(driverId);
                        driverData.wins += 1;
                    }
                });
            });

            this.drivers = Array.from(driversMap.values()).sort((a, b) => b.wins - a.wins);
        });
    }
}