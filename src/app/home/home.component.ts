import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WorkLog, HourlyLog } from '../models/work-log.model';
import * as feather from 'feather-icons';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  dayLog: WorkLog[] = [];
  selectedWorkLog: WorkLog = {
    id: '',
    date: '',
    comment: '',
    hourLog: [],
    statusText: 'Normal',
  };
  selectedWorkLogId: string = '';
  todayDate: string = '';
  yesterdayDate: string = '';


  graphData:any={urgentImportant:0,none:0, urgent:0,important:0};

  constructor(public crudApi: CrudService) {}

  ngOnInit(): void {
    var _d = new Date();
    this.todayDate =
      String(_d.getDate()).padStart(2, '0') +
      '-' +
      String(_d.getMonth()).padStart(2, '0') +
      '-' +
      _d.getFullYear();
    _d.setDate(_d.getDate() - 1);
    this.yesterdayDate =
      String(_d.getDate()).padStart(2, '0') +
      '-' +
      String(_d.getMonth()).padStart(2, '0') +
      '-' +
      _d.getFullYear();
    // this.initWorkLog(this.todayDate);
  }

  initWorkLog(date: string) {
    var _id = date.toString().replace('-', '').replace('-', '');

    this.crudApi.GetCurrentDayWorkLog(_id).subscribe((ss) => {
      if (ss.docs.length === 0) {
        var _hourlyRecords: HourlyLog[] = [
          {
            id: _id + '00000100',
            date: date,
            timing: '12:00 AM - 01:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '01000200',
            date: date,
            timing: '01:00 AM - 02:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '02000300',
            date: date,
            timing: '02:00 AM - 03:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '03000400',
            date: date,
            timing: '03:00 AM - 04:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '04000500',
            date: date,
            timing: '04:00 AM - 05:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '05000600',
            date: date,
            timing: '05:00 AM - 06:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '06000700',
            date: date,
            timing: '06:00 AM - 07:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '07000800',
            date: date,
            timing: '07:00 AM - 08:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '08000900',
            date: date,
            timing: '08:00 AM - 09:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '09001000',
            date: date,
            timing: '09:00 AM - 10:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '10001100',
            date: date,
            timing: '10:00 AM - 11:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '11001200',
            date: date,
            timing: '11:00 AM - 12:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '12001300',
            date: date,
            timing: '12:00 PM - 01:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '13001400',
            date: date,
            timing: '01:00 PM - 02:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '14001500',
            date: date,
            timing: '02:00 PM - 03:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '15001600',
            date: date,
            timing: '03:00 PM - 04:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '16001700',
            date: date,
            timing: '04:00 PM - 05:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '17001800',
            date: date,
            timing: '05:00 PM - 06:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '18001900',
            date: date,
            timing: '06:00 PM - 07:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '19002000',
            date: date,
            timing: '07:00 PM - 08:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '20002100',
            date: date,
            timing: '08:00 PM - 09:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '21002200',
            date: date,
            timing: '09:00 PM - 10:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '22002300',
            date: date,
            timing: '10:00 PM - 11:00 PM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
          {
            id: _id + '23000000',
            date: date,
            timing: '11:00 PM - 12:00 AM',
            comment: '',
            isImportant: false,
            isUrgent: false,
            isQuick: false,
          },
        ];
        var workLogRecord = {
          id: _id,
          date: date,
          comment: '',
          hourLog: _hourlyRecords,
          statusText: 'Normal',
        };
        // Created Record
        this.crudApi
          .CreateWorkLog(workLogRecord)
          .then((res) => {
            this.initWorkLog(this.selectedWorkLog.date);
            console.log('Record created!');
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        ss.docs.forEach((doc) => {
          const recordObj = doc.data();
          this.selectedWorkLogId = doc.id;
          this.selectedWorkLog = {
            comment: recordObj.comment,
            date: recordObj.date,
            hourLog: recordObj.hourLog,
            id: recordObj.id,
            statusText: recordObj.statusText,
          };

          let urgentVal = 0,importantVal = 0,urgentImportantVal = 0,noneVal = 0,totalCount = 0;
          this.selectedWorkLog.hourLog.forEach(el => {

            if(el.comment!=''){
              totalCount++;
              if(el.isImportant==true && el.isUrgent==true){ urgentImportantVal++;}
              else if(el.isImportant==true && el.isUrgent==false){importantVal++;}
              else if(el.isImportant==false && el.isUrgent==true){urgentVal++;}
              else{noneVal++;}
            }
          });

          //graphData:any={urgentImportant:0,none:0, urgent:0,important:0};
          this.graphData.urgentImportant = (urgentImportantVal/totalCount)*100;
          this.graphData.urgent = (urgentVal/totalCount)*100;
          this.graphData.important = (importantVal/totalCount)*100;
          this.graphData.none = (noneVal/totalCount)*100;


          console.log(this.selectedWorkLog);
        });
      }
    });
  }

  onClickAddDay(date: string) {
    this.initWorkLog(date);
  }

  onUpdateWorkLog() {
    this.crudApi
      .UpdateWorkLog(this.selectedWorkLogId, this.selectedWorkLog)
      .then((res) => {
        this.initWorkLog(this.selectedWorkLog.date);
        console.log('Record update!');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngAfterViewInit() {
    feather.replace();
  }
}
