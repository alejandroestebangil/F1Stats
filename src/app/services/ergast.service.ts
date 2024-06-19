import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErgastService {
  private baseUrl = 'https://ergast.com/api/f1';

  constructor(private http: HttpClient) { }

  date: Date = new Date();
  year: number = this.date.getFullYear();

  getNextRace(): Observable<any> {
    return this.http.get('https://ergast.com/api/f1/current/next.json');
  }

  getLastRace5(): Observable<any> {
    return this.http.get('https://ergast.com/api/f1/current/last/results.json?limit=5');
  }

  getLastRace(): Observable<any> {
    return this.http.get('https://ergast.com/api/f1/current/last/results.json');
  }

  getDriverStandings(year: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${year}/driverStandings.json`);
  }

  getConstructorStandings(): Observable<any> {
    return this.http.get(
      'https://ergast.com/api/f1/current/constructorStandings.json'
    );
  }

  getCircuits(): Observable<any> {
    return this.http.get('https://ergast.com/api/f1/circuits.json');
  }

  getCalendar(): Observable<any> {
    return this.http.get(`https://ergast.com/api/f1/${this.year}.json`);
  }

  getDriversChampionships(): Observable<any> {
    const url = `${this.baseUrl}/driverStandings/1.json?limit=1000`;
    return this.http.get(url).pipe(
      map((data: any) => data.MRData.StandingsTable.StandingsLists)
    );
  }

  getRaceWinners(): Observable<any> {
    const url = `${this.baseUrl}/results/1.json?limit=1000`;
    return this.http.get(url).pipe(
      map((data: any) => data.MRData.RaceTable.Races)
    );
  }

  getPoleWinners(): Observable<any> {
    const url = `${this.baseUrl}/qualifying/1.json?limit=1000`;
    return this.http.get(url).pipe(
      map((data: any) => data.MRData.RaceTable.Races)
    );
  }

  getPodiumWinners(): Observable<any> {
    const url = `${this.baseUrl}/results.json?limit=1000`;
    return this.http.get(url).pipe(
      map((data: any) => data.MRData.RaceTable.Races)
    );
  }

  getDriversSeasons(): Observable<any> {
    const url = `${this.baseUrl}/driverStandings.json?limit=1000`;
    return this.http.get(url).pipe(
      map((data: any) => data.MRData.StandingsTable.StandingsLists)
    );
  }
}
