import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  text:string = "";
  day : string = "";
  reminder : boolean = false;
  showAddTask! :boolean
  subscription : Subscription;

  @Output() submitTask : EventEmitter<Task> = new EventEmitter()

  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((res) => this.showAddTask = res)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('add text')
    }
    if(!this.day){
      alert('add day')
    }

    const newTask = {
      text : this.text,
      day: this.day,
      reminder: this.reminder
    }
    
    this.submitTask.emit(newTask)

    // setting up clean values
    this.text = ""
    this.day = ""
    this.reminder = false

  }

}
