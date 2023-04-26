import { Injectable } from '@angular/core';
import { Log } from '../model/log';

import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  addLog(newLog: { id: string; text: string; date: Date; }) {
   this.logs.unshift(newLog)
  }

  logs: Log[]
  private logSource = new BehaviorSubject<Log>({id : "", text : "", date : ""})
  public selectedLog = this.logSource.asObservable()

  constructor() {

    this.logs = [
      {
        id: "1",
        text: "mylogs",
        date: new Date('12/12/2022')
      },
      {
        id: "2",
        text: "bootstrap",
        date: new Date('11/12/2022')
      }
    ]

  }
  getLogs() : Observable<Log[]> {
    return of(this.logs)
  }

  setFormLogs(log:Log){

    return this.logSource.next(log)
  }
}
