import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/model/log';
import { LogService } from 'src/app/services/log.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  text!: string
  id!: string
  date!:Date 

  isNew: boolean = true


  constructor(private logservice: LogService) {
  }
  ngOnInit(): void {
    this.logservice.selectedLog.subscribe(data => {
      this.isNew = false
      console.log(data.text)
      this.text = data.text
      this.id = data.text
      
    })

  }

  onSubmit(){
    if(this.isNew){
      const newLog = {
        id : uuidv4(),
        text: this.text,
        date : new Date()
      }

      console.log(newLog)
      
    }else{

      const updateLog = {
        id : this.id,
        text: this.text,
        date : new Date()
      }
      console.log("this is updates")

    }
  }


}  

