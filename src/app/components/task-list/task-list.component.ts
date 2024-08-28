import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() heading: string = '';
  @Input() color: string = '';
  @Input() expanded: boolean = false;
  @Input() tasks: any[] = []; // Array of tasks to be displayed

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
