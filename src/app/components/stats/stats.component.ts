import { Component, OnInit, NgModule } from '@angular/core';
import { ErgastService } from '../../services/ergast.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ChampionsComponent } from './champions.component';

@Component({
    selector: 'app-drivers',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule],
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent{
    
}
