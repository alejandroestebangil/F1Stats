import { Component, OnInit } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
    selector: 'app-circuits',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule],
    templateUrl: './circuits.component.html',
    styleUrls: ['./circuits.component.css'],
})

export class CircuitsComponent implements OnInit {
    circuits: any[] = [];

    constructor(private ergastService: ErgastService) { }

    ngOnInit(): void {
        this.ergastService.getCircuits().subscribe(data => {
            this.circuits = data.MRData.CircuitTable.Circuits;
        });
    }
}