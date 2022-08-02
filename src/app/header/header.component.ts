import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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
  menuClicked!:boolean;
  @Output() filter = new EventEmitter<string>();
  @ViewChild('menu') menu!:ElementRef;
  @ViewChild('ham') ham!:ElementRef;
  public innerWidth: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuClicked = false;
    this.innerWidth = window.innerWidth;
   this.getUser();

  }
  @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      this.innerWidth = window.innerWidth;
      if(this.innerWidth <= 800){
        if(this.menuClicked){
          this.ham.nativeElement.style.height = "160px";
          this.menu.nativeElement.style.display = "block"
        }
        else{
          this.ham.nativeElement.style.height = "29px";
          this.menu.nativeElement.style.display = "none"
        }

      }
      if(this.innerWidth > 800 ){
        this.menuClicked =  false;
        this.menu.nativeElement.style.display = "block"
      }
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
  openMenu(){
    this.menuClicked =! this.menuClicked
    if(this.menuClicked){
      this.ham.nativeElement.style.height = "160px";
      this.menu.nativeElement.style.display = "block"
    }
    else{
      this.ham.nativeElement.style.height = "29px";
      this.menu.nativeElement.style.display = "none"
    }

  }

}
