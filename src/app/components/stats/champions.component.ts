import { Component, OnInit, NgModule } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-drivers',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule],
    templateUrl: './champions.component.html',
    styleUrls: ['./stats.component.css']
})
export class ChampionsComponent implements OnInit {
    drivers: any[] = [];

    constructor(private ergastService: ErgastService) { }

    ngOnInit(): void {
        this.ergastService.getDriversChampionships().subscribe(data => {
            const driversMap = new Map();

            data.forEach(season => {
                const year = season.season;
                season.DriverStandings.forEach(driver => {
                    const driverId = driver.Driver.driverId;
                    if (!driversMap.has(driverId)) {
                        driversMap.set(driverId, {
                            name: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
                            nationality: driver.Driver.nationality,
                            championships: 0,
                            years: []
                        });
                    }
                    const driverData = driversMap.get(driverId);
                    driverData.championships += 1;
                    driverData.years.push(year);
                });
            });

            this.drivers = Array.from(driversMap.values()).sort((a, b) => b.championships - a.championships);
        });
    }
}
