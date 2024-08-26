import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { toggleExpanded, toggleEditable } from '../../store/actions';
import { TaskState } from '../../store/states';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  private isEditableSubscription: Subscription;
  isExpanded: Boolean = false;
  isEditable: Boolean = false;
  details: any = {
    name: String,
    priority: String,
    description: String,
    duedate: String,
    status: String,
  };

  constructor(private store: Store<{ taskState: TaskState }>) {
    this.isEditableSubscription = this.store
      .select((state) => state.taskState.isEditable)
      .subscribe((editablestate) => {
        this.isEditable = editablestate;
      });
    this.details.name = 'LOREM';
    (this.details.priority = 'low'),
      (this.details.description = 'LOREM'),
      (this.details.duedate = new Date().toISOString().split('T')[0]);
    this.details.status = 'LOREM';
  }

  toggleEditable() {
    this.store.dispatch(toggleEditable());
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
