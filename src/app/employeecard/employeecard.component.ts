import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeregistrationComponent } from '../employeeregistration/employeeregistration.component';
interface EMP{
  id: string
  name: string
  position: string
  about: string
  joining_date: string
}
@Component({
  selector: 'app-employeecard',
  templateUrl: './employeecard.component.html',
  styleUrls: ['./employeecard.component.scss']
})
export class EmployeecardComponent implements OnInit {
  empArr!: EMP[];
  columns = [ 'name', 'position', 'about', 'joining_date']
  constructor(public regnForm: MatDialog) { }

  ngOnInit(): void {
    this.empArr = JSON.parse(localStorage.getItem('employee') || '[]')
    console.log ('ddd',this.empArr)
  }
  deleteEmployee(index:number){
    this.empArr.splice(index,1)
    localStorage.setItem('employee',JSON.stringify(this.empArr))
  }
  closeCard(index:number){
    console.log(index)
    this.empArr.splice(index,1)
  }
  openEdit(employee: EMP){

    const regForm = this.regnForm.open(EmployeeregistrationComponent, {
      width: '500px',
      autoFocus: false,
      data: employee
    })
    regForm.afterClosed().subscribe(result => {
      console.log(result)
      if(result){
        console.log(result)
        this.empArr = JSON.parse(localStorage.getItem('employee') || '[]')
        let found = this.empArr.findIndex(emp=>emp.id === result.id)
        this.empArr[found] = result
        localStorage.setItem('employee', JSON.stringify(this.empArr))

      }
    })
  }
}
