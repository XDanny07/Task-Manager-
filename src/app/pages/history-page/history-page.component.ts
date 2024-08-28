import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TaskHistoryService } from '../../service/history.service';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css',
})
export class HistoryPageComponent {
  taskHistory: any;
  taskId: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private taskHistoryService: TaskHistoryService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.taskId = params.get('id');
      if (this.taskId) {
        this.loadTaskHistory(this.taskId);
      }
    });
  }

  loadTaskHistory(taskId: string): void {
    this.taskHistoryService
      .getTaskHistory(taskId)
      .then((response) => {
        this.taskHistory = response.data;
        console.log(this.taskHistory);
      })
      .catch((error) => {
        console.error('Error fetching task history', error);
      });
  }
}
