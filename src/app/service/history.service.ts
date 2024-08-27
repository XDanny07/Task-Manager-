import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TaskHistoryService {
  private apiUrl = 'http://192.168.56.98:3000/api/history';

  constructor() {}

  getTaskHistory(taskId: string): Promise<AxiosResponse<any>> {
    const url = `${this.apiUrl}/${taskId}`;
    return axios.get(url);
  }
}
