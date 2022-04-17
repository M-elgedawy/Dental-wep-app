import { event } from './../models/event';
import { EventService } from './../services/event.service';
import {events} from 'src/app/models/time'
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,TemplateRef  } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  object=new events;
  modalRef: BsModalRef;


  Events: event[] = [];
  calendarEvents:any[]=[];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };
  constructor(private httpClient: HttpClient,private modalService: BsModalService,private eventser:EventService) {

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  save(){
    this.httpClient.post('http://localhost:3000/event',this.object).subscribe(data=>{
    
    })
  }
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }
  ngOnInit() {
    setTimeout(() => {
      // return this.httpClient
      //   .get('http://localhost:3000/event')
      //   .subscribe((res: any) => {
      //     this.Events=res;
      //     this.Events.forEach(e=>{
      //       let calendarevent={
      //        title: e.title,
      //        date:e.date
      //       }
      //       this.calendarEvents.push(calendarevent);
      //       console.log(this.calendarEvents)
      //     })
      return this.eventser.addEvent().subscribe(res=>{
          this.Events=res;
          console.log(this.Events)
      })


    }, 2200);
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        events: this.Events,

      };
    }, 2500);
  }





}
