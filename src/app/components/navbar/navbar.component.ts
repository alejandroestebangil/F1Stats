import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: '../../styles/styleIndex.css'
})
export class NavbarComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {}

  callFunction() {}
}
