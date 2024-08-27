import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../service/task.service';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}
  async ngOnInit() {
    try {
      this.tasks = await this.taskService.getAllTasks();
      console.log(this.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }
}
