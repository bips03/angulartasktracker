import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  // intialize task to empty task array
  tasks: Task[] = [];
  dummy: any[] = [];
  //this is the UI tasks

  //creating task service object in constructor
  constructor(
    private taskService: TaskService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    // the taskservice object returns an observable which is subscribed
    this.taskService.getTasks().subscribe((res) => {
      this.dummy = res.docs;
      this.tasks = this.dummy.map((v) => v.data());
      console.log(this.tasks);
    });
  }

  //once caught in parent tasks to get delete we delete using service here
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  toggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addNewTask(task: Task) {
    const id = this.firestore.createId();
    const newTask = { id, ...task };
    this.taskService.addTask(newTask, id).subscribe((res) => {
      this.tasks = [...this.tasks, newTask];
    });
  }
}
