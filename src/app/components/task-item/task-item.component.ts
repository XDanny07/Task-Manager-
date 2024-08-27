import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TaskState } from '../../store/states';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() data: any;
  isExpanded: Boolean = false;
  isEditable: Boolean = false;
  details: any = {
    name: String,
    priority: String,
    description: String,
    duedate: String,
    status: String,
  };
  tempdetails: any = {
    name: String,
    priority: String,
    description: String,
    duedate: String,
    status: String,
  };
  constructor(
    private store: Store<{ taskState: TaskState }>,
    private taskService: TaskService
  ) {}
  ngOnInit() {
    this.details = { ...this.data };
    this.tempdetails = { ...this.data };
  }
  async updateTask() {
    try {
      const updatedTask = await this.taskService.updateTask(
        this.data._id,
        this.tempdetails
      );
      this.details = { ...this.tempdetails };
      console.log('Task updated successfully:', updatedTask);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  }
  toggleEditable() {
    this.isEditable = !this.isEditable;
  }
  handleSubmit(e: any) {
    e.stopPropagation();
  }
  discardChanges() {
    this.tempdetails = { ...this.tempdetails, ...this.details };
    this.toggleEditable();
  }
  inputChange(e: any) {
    const { name, value } = e.target;
    this.tempdetails[name] = value;
  }
  toggleDetails(e: any) {
    this.isExpanded = !this.isExpanded;
  }
}
