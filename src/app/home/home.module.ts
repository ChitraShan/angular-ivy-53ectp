import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sample1Component } from './sample1/sample1.component';
import { HomeRoutingModule } from './home-routing.module';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [Sample1Component],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
