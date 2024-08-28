import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'addtask', component: AddItemComponent },
  { path: 'history/:id', component: HistoryPageComponent },
];
