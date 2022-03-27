import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent implements OnInit {

  @Input() task! : Task;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter()
  @Output() onToggle: EventEmitter<Task> = new EventEmitter()

  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  delete(task:Task){
    this.onDelete.emit(task)
  }
  toggle(task:Task){
    this.onToggle.emit(task)
  }
}
