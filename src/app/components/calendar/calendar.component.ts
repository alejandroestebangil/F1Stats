import { Component, OnInit } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule],
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
    raceCalendar: any = {};

    constructor(private ergastService: ErgastService) { }

    ngOnInit() {
        this.ergastService.getCalendar().subscribe((res) => {
            this.raceCalendar = res.MRData.RaceTable;
        });
    }
}
