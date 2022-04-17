
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPipe } from './test.pipe';
import { FormsModule } from '@angular/forms';
import { TimeComponent } from './time/time.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientsComponent } from './patients/patients.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ExaminationComponent } from './examination/examination.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
interactionPlugin,
dayGridPlugin

]);


@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    TimeComponent,
    PatientsComponent,
    NavComponent,
    HomeComponent,
    ExaminationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ModalModule.forRoot()




  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
