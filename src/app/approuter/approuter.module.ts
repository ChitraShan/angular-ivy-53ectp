import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { Sample1Component } from '../home/sample1/sample1.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sample1',
    component: Sample1Component
  }
];

@NgModule({
  imports: [CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class ApprouterModule {}
