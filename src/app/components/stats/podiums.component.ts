import { Component, OnInit, NgModule } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-podium-winners',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule],
    templateUrl: './podiums.component.html',
    styleUrls: ['./stats.component.css']
})
export class PodiumsComponent implements OnInit {
    drivers: any[] = [];

    constructor(private ergastService: ErgastService) { }

    ngOnInit(): void {
        this.ergastService.getPodiumWinners().subscribe(data => {
            const driversMap = new Map();

            data.forEach(race => {
                race.Results.forEach(result => {
                    const position = parseInt(result.position, 10);
                    if (position <= 3) {
                        const driverId = result.Driver.driverId;
                        if (!driversMap.has(driverId)) {
                            driversMap.set(driverId, {
                                name: `${result.Driver.givenName} ${result.Driver.familyName}`,
                                nationality: result.Driver.nationality,
                                podiums: 0
                            });
                        }
                        const driverData = driversMap.get(driverId);
                        driverData.podiums += 1;
                    }
                });
            });

            this.drivers = Array.from(driversMap.values()).sort((a, b) => b.podiums - a.podiums);
        });
    }
}
