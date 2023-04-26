import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/model/log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent  {

    logs!:Log[]

    constructor(private logService:LogService){
      logService.getLogs().subscribe(data=>{
        this.logs =  data
      })
    }

    onSelect(log:Log){
      console.log(log)
      this.logService.setFormLogs(log)
    }
  
  }
