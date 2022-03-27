import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // intialize task to empty task array
  tasks: Task[] = [];
  //this is the UI tasks

  //creating task service object in constructor
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // the taskservice object returns an observable which is subscribed
    this.taskService.getTasks().subscribe((res) => (this.tasks = res));
  }

  //once caught in parent tasks to get delete we delete using service here
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addNewTask(task: Task) {
    this.taskService.addTask(task).subscribe((t) => {
      this.tasks = [...this.tasks, t];
    });
  }
}
