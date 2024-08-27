import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'addtask', component: AddItemComponent },
];
