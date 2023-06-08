import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    { title:"Title 1", description:"Description 1" },
    { title:"Title 2", description:"Description 2" },
    { title:"Title 3", description:"Description 3" }
  ];

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  onTaskAdded(task: Task): void {
    // Handle the task added event from the child component
    console.log('Task added:', task);
    this.tasks.push(task);
  }

  ngOnInit(): void {
  }
}
