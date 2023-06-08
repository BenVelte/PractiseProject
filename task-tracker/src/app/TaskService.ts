import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../app/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // API URL for backend script
  private apiEndpoint = 'http://localhost/task-handler.php';
  constructor(private http: HttpClient) {}
  
  // POST request with tasks
  saveTasks(tasks: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');  
    return this.http.post<any>(`${this.apiEndpoint}?action=save`, tasks, {headers});
  }

  // GET request for tasks
  loadTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiEndpoint}?action=load`);
  }
}
