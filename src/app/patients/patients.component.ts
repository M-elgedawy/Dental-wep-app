import { Router } from '@angular/router';
import { patient } from './../models/patient';
import { HttpClient } from '@angular/common/http';

import { PatientServiceService } from './../services/patient-service.service';
import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients:patient[]=[];
  term:any;
  modalRef: BsModalRef;
  object= new patient;

  constructor(private pService:PatientServiceService,private modalService: BsModalService
    ,private http:HttpClient,private route:Router){

    }
  getData(){
    this.pService.getData().subscribe((res:any)=>{
     
      this.patients=res;
    })
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit() {
    this.getData()
  }
  save(){
    this.pService.postData(this.object).subscribe(res=>{
       window.location.reload()
    })
  }
  remove(id){
    this.pService.delete(id).subscribe(res=>{
      window.location.reload()
    })
  }




}
