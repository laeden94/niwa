import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

@Component({
  selector: 'niwa',
  standalone: true,
  imports: [CommonModule, AppModule],
  template: `<app-component></app-component>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
