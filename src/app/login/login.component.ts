import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';

interface data{
  username: string
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!:string;
  password!:string;
  loginForm!: FormGroup;
  message!: string;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.loginForm = this.fb.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  login(loginform: data){
    this.message = '';
    this.loginForm.markAllAsTouched();
    if(this.loginForm.valid){
      if(loginform.username === environment.username && loginform.password === environment.password){
        let user = {authenticated:'true'}
        localStorage.setItem('user',JSON.stringify(user))
        this.router.navigate(['/home'])
      }
      else{
        this.message = 'Login Error'
      }
  }
}
}
