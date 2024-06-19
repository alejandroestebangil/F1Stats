import { Component, OnInit, NgModule } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-pole-winners',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule],
    templateUrl: './mostpoles.component.html',
    styleUrls: ['./stats.component.css']
})
export class MostPolesComponent implements OnInit {
    drivers: any[] = [];

    constructor(private ergastService: ErgastService) { }

    ngOnInit(): void {
        this.ergastService.getPoleWinners().subscribe(data => {
            const driversMap = new Map();

            data.forEach(race => {
                race.QualifyingResults.forEach(result => {
                    if (result.position === "1") {
                        const driverId = result.Driver.driverId;
                        if (!driversMap.has(driverId)) {
                            driversMap.set(driverId, {
                                name: `${result.Driver.givenName} ${result.Driver.familyName}`,
                                nationality: result.Driver.nationality,
                                poles: 0
                            });
                        }
                        const driverData = driversMap.get(driverId);
                        driverData.poles += 1;
                    }
                });
            });

            this.drivers = Array.from(driversMap.values()).sort((a, b) => b.poles - a.poles);
        });
    }
}
