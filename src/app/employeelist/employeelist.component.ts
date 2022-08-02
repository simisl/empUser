import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router'

interface EMP{
  id: string
  name: string
  position: string
  about: string
  joining_date: string
}

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  empArr!: EMP[];
  columns = [ 'name', 'position', 'about', 'joining_date'];
  dataSource = new MatTableDataSource<EMP>(this.empArr)
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.empArr = JSON.parse(localStorage.getItem('employee') || '[]')
    this.dataSource.data = this.empArr
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter)
    };
  }
  filterValue(data: string){
    data = data.trim();
    data = data.toLowerCase();
    if(data.match(/^[^a-zA-Z0-9]+$/)){
      this.router.navigate(['error'])
    }
    else{

      this.dataSource.filter = data;
    }

  }

}
