import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface USER{
  authenticated: boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user!: USER
  authenticated!: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
