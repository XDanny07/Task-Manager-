import { Component } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  name: String;
  priority: String;
  description: String;
  duedate: String;

  constructor() {
    this.name = 'LOREM';
    (this.priority = 'LOREM'),
      (this.description = 'LOREM'),
      (this.duedate = new Date().toISOString().split('T')[0]);
  }
  handleSubmit(e: any) {
    console.log(e);
    e.stopPropagation();
  }
  toggleDetails() {
    console.log(this.duedate);
    const taskDetails = document.querySelector('.task-details');
    taskDetails?.classList.toggle('show');
  }
}
