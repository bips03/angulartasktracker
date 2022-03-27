import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask:boolean = false
  private subject = new Subject<any>()
  constructor() { }

  toggleAddTask():void {
    //change the value here and send the updated value to other observables to change accordingly
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
  }

  //this runs after the value has changed
  onToggle() : Observable<any>{
    return this.subject.asObservable()
  }
}
