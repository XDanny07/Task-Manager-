import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://192.168.56.98:3000/api/tasks'; // Your backend API URL

  constructor() {}

  // Method to add a new task using Axios
  async addTask(taskData: any): Promise<any> {
    try {
      const response = await axios.post(this.apiUrl, taskData);
      return response.data;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  }

  async getAllTasks(): Promise<any[]> {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  }
  async updateTask(taskId: string, updatedData: any): Promise<any> {
    try {
      const response = await axios.put(`${this.apiUrl}/${taskId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  }
  async deleteTask(taskId: string): Promise<any> {
    try {
      const response = await axios.delete(`${this.apiUrl}/${taskId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  }
}
