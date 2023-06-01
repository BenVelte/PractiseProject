import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  title: string = '';
  description: string = '';

  @Output() taskAdded = new EventEmitter<Task>();

  addTask(): void {
    if (this.title && this.description) {
      const task: Task = { title: this.title, description: this.description };
      this.taskAdded.emit(task);
      console.log(task);
      this.title = '';
      this.description = '';
    }
  }

  ngOnInit(): void {
  }
}
