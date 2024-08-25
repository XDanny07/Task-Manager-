import { Component } from '@angular/core';
import { TaskItemComponent } from '../../components/task-item/task-item.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TaskItemComponent, NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
