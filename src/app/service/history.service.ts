import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TaskHistoryService {
  private apiUrl = `https://task-manager-backend-fawn.vercel.app/api/history`;

  constructor() {}

  getTaskHistory(taskId: string): Promise<AxiosResponse<any>> {
    const url = `${this.apiUrl}/${taskId}`;

    return axios.get(url);
  }
}
