import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../TaskService';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  // Save tasks using TaskService
  saveTasks(): void {
  this.taskService.saveTasks(JSON.stringify(this.tasks)).subscribe(
    response => {
      console.log('Tasks saved successfully');
    },
    error => {
      console.error('Error saving tasks:', error);
    }
  );
}

 // Load tasks using TaskService
 loadTasks(): void {
  this.taskService.loadTasks().subscribe(
    tasks => {
      if (tasks != null) {
        this.tasks = tasks;
      }
      console.log('Tasks loaded successfully');
    },
    error => {
      console.error('Error loading tasks:', error);
    }
  );
}

 // Delete tasks from list
  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }

  // Handle the task added event from the child component
  onTaskAdded(task: Task): void {
    console.log('Task added:', task);
    this.tasks.push(task);
    this.saveTasks();
  }

  // Load tasks from backend on initialization
  ngOnInit(): void {
    this.loadTasks();
  }
}
