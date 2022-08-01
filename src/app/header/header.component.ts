import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

interface USER{
  authenticated: boolean
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user!: USER;
  authenticated!: boolean;
  search!: string;
  @Output() filter = new EventEmitter<string>();
  constructor(private router: Router) { }

  ngOnInit(): void {
   this.getUser();

  }
  sendData(){
    this.filter.emit(this.search)
  }
  login(){
    this.router.navigate(['login'])
  }
  logout(){
    localStorage.clear()
    this.getUser();
    this.router.navigate(['home'])
  }
  getUser(){
    this.user = JSON.parse(localStorage.getItem('user')|| '[]')
    console.log('this.user',this.user)
    this.authenticated = this.user.authenticated
  }

}
