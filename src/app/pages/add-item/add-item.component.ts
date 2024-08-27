import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent {
  details: any = {
    name: String,
    priority: String,
    description: String,
    duedate: String,
    status: String,
  };
  constructor(private taskService: TaskService) {
    this.details.duedate = new Date().toISOString().split('T')[0];
  }
  inputChange(e: any) {
    const { name, value } = e.target;
    this.details[name] = value;
  }
  handleSubmit(e: any) {
    e.stopPropagation();
    this.addNewTask();
  }
  async addNewTask() {
    console.log(this.details);
    try {
      const response = await this.taskService.addTask(this.details);
      console.log('Task added successfully:', response);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }
}
