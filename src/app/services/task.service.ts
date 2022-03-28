import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // the api url in the backend
  private backendUrl = 'http://localhost:5000/tasks'
  
  //as we are importing a class need to declare in constructor
  constructor(private http:HttpClient, private firestore : AngularFirestore) {}

  getTasks(): Observable<any> {
    // const tasks = of(TASKS);
    //dont need of as it handles that
    // return this.http.get<Task[]>(this.backendUrl);
   
    const task = this.firestore.collection("tasks").snapshotChanges()
    return task
   

  }

  deleteTask(task:Task): Observable<Task> {
    const url = `${this.backendUrl}/${task.id}`;
    //we delete the task and get back our task which was deleted.. in frontend we can change our tasks again
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task:Task) : Observable<Task> {
    const url = `${this.backendUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions)
  }

  addTask(task:Task) : Observable<Task>{
    return this.http.post<Task>(this.backendUrl,task,httpOptions)
  }
}
