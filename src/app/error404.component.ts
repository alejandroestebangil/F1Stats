import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ChampionsComponent } from './components/stats/champions.component';
import { ErgastService } from './services/ergast.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { StatsComponent } from './components/stats/stats.component';

@Component({
  providers: [ErgastService],
  templateUrl: '404.html',
  styleUrls: ['styles/style404.css']
})

export class error404Component {
}