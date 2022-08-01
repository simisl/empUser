
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeregistrationComponent } from '../employeeregistration/employeeregistration.component';

interface EMP{
  id: string
  name: string
  position: string
  about: string
  joining_date: Date
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  empArr!: EMP[];
  list!:boolean;
  new!:boolean;
  card!:boolean;

  columns = [ 'name', 'position', 'about', 'joining_date']

  constructor( public regnForm: MatDialog) { }

  ngOnInit(): void {
  }
  openForm(){
    this.list = false;
    this.new = true;
    this.card = false;
    const regForm = this.regnForm.open(EmployeeregistrationComponent, {
      width: '500px',
      autoFocus: false
    })
    regForm.afterClosed().subscribe(result => {
      console.log(result)
      this.new = false;
      if(result){

        this.empArr = JSON.parse(localStorage.getItem('employee') || '[]')
        result.id = this.empArr.length
        this.empArr.push(result)
        localStorage.setItem('employee', JSON.stringify(this.empArr))
        alert('New Employee is Added')
      }
    })

  }


}

