import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../service/task.service';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    TaskItemComponent,
    NavbarComponent,
    TaskListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  tasks: any[] = [];
  filteredTasks: any[][] = [];
  filteredDates: { date: string; tasks: any[] }[] = [];
  sortOn: String = 'status';
  constructor(private taskService: TaskService) {}
  async ngOnInit() {
    try {
      this.tasks = await this.taskService.getAllTasks();
      this.statusFilter();
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }
  applySort(e: any) {
    const op = e.target.value;
    if (op == 'status') {
      this.statusFilter();
    } else if (op == 'priority') {
      this.priorityFilter();
    } else {
      this.dateFilter();
    }
    this.sortOn = op;
  }
  priorityFilter() {
    const lowPriorityTasks = this.tasks.filter(
      (task) => task.priority === 'Low'
    );
    const mediumPriorityTasks = this.tasks.filter(
      (task) => task.priority === 'Medium'
    );
    const highPriorityTasks = this.tasks.filter(
      (task) => task.priority === 'High'
    );
    this.filteredTasks = [
      lowPriorityTasks,
      mediumPriorityTasks,
      highPriorityTasks,
    ];
    // console.log(this.filteredTasks);
  }
  statusFilter() {
    const todo = this.tasks.filter((task) => task.status === 'To-Do');
    const inprog = this.tasks.filter((task) => task.status === 'In-Progress');
    const comp = this.tasks.filter((task) => task.status === 'Completed');
    this.filteredTasks = [todo, inprog, comp];
    // console.log(this.filteredTasks);
  }
  dateFilter() {
    const taskGroups: { [key: string]: any[] } = {};

    this.tasks.forEach((task) => {
      const dateKey = new Date(task.duedate).toDateString();
      if (!taskGroups[dateKey]) {
        taskGroups[dateKey] = [];
      }
      taskGroups[dateKey].push(task);
    });
    const filteredDates: { date: string; tasks: any[] }[] = Object.keys(
      taskGroups
    ).map((dateKey) => {
      return {
        date: dateKey,
        tasks: taskGroups[dateKey],
      };
    });
    filteredDates.sort((a, b) => {
      const dateA = new Date(a.date).setHours(0, 0, 0, 0);
      const dateB = new Date(b.date).setHours(0, 0, 0, 0);
      return dateA - dateB;
    });
    this.filteredDates = filteredDates;
  }
}
