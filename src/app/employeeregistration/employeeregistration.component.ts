import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


interface EMP{
  id:string
  name: string
  position: string
  about: string
  joining_date: string
}

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.scss']
})
export class EmployeeregistrationComponent implements OnInit {

  userForm!: FormGroup;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<EmployeeregistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EMP
  ){}
  ngOnInit(){
    console.log('data',this.data)
    this.userForm = this.fb.group({
      name: new FormControl('',[Validators.required]),
      position: new FormControl('',[Validators.required]),
      about: new FormControl('',[Validators.required]),
      joining_date: new FormControl('',[Validators.required])
    })
    if(this.data){
      let employee = {
        name: this.data.name,
        position: this.data.position,
        about: this.data.about,
        joining_date: this.data.joining_date
      }
      this.userForm.setValue(employee)
    }
  }
  save(userform: EMP){

    this.userForm.markAllAsTouched()
    if(this.userForm.valid){
      if(this.data){
        userform.id = this.data.id
      }
      this.dialogRef.close(userform);


    }

  }

}
