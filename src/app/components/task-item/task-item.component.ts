import { Component } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  isExpanded: Boolean;
  details: any = {
    name: String,
    priority: String,
    description: String,
    duedate: String,
  };

  constructor() {
    this.isExpanded = false;
    this.details.name = 'LOREM';
    (this.details.priority = 'LOREM'),
      (this.details.description = 'LOREM'),
      (this.details.duedate = new Date().toISOString().split('T')[0]);
  }
  toggleExpaned() {
    this.isExpanded = !this.isExpanded;
  }
  handleSubmit(e: any) {
    e.stopPropagation();
  }
  inputChange(e: any) {
    const { name, value } = e.target;
    this.details[name] = value;
    console.log(this.details);
  }
  toggleDetails() {
    const taskDetails = document.querySelector('.task-details');
    taskDetails?.classList.toggle('show');
  }
}
