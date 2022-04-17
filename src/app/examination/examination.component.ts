import { service } from './../models/service';
import { HttpClient } from '@angular/common/http';
import { patient } from './../models/patient';
import { PatientServiceService } from './../services/patient-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {
 id:any;
 object:patient;
 services:service[]=[];
 servicesNames:any[]=[]
 selected:service;
 total:number=0;
  constructor(private route:ActivatedRoute,private router:Router ,private pService:PatientServiceService
    ,private http:HttpClient ) {
   this.id= this.route.snapshot.paramMap.get('id');
   console.log(this.id)
   }

  ngOnInit(): void {
   this.getPatientData()
   this.getServicesData()
  }
  getPatientData(){
    this.pService.getById(this.id).subscribe(res=>{
      this.object=res;
    })
  }
  getServicesData(){
    this.http.get('http://localhost:3000/services').subscribe((res:any)=>{
      this.services=res
    })
  }
  changeOptions(){
    this.total+=Number(this.selected.price);
    this.servicesNames.push(
      {
        name:this.selected.name,
        price:this.selected.price
      }
    )
    console.log(this.servicesNames)
  }
  generatePDF() {
    let docDefinition:any = {
      content: [
        {
        text: 'Denatal Clinic',
        fontSize: 16,
        alignment: 'center',
        color: '#047886'
      },
      {
        text: 'INVOICE',
        fontSize: 20,
        bold: true,
        alignment: 'center',
        decoration: 'underline',
        color: 'skyblue'
      },
      {
        text:'Invoice Details',
        bold: true,
        decoration: 'underline',
        ontSize: 14,
        margin: [0, 15, 0, 15]
      },
      {
        table:{
          headerRows: 1,
          widths: ['auto', 'auto'],
          body:[
            ['name','price'],...this.servicesNames.map(serv=>[serv.name,serv.price])
          ]
        }
      },
      {
        text:'total',
        bold:true,
        decoration: 'underline',
        color: 'skyblue'


      },
      {
        text:this.total,
        bold:true,

      },
      {
        ul: [
          'we are happy to see you',
          'please follow doctor`s instructions',

        ],
    }

      ]
    };

    pdfMake.createPdf(docDefinition).open();
  }



}
