import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'RxJS',
    'HTML5',
    'SCSS',
    'Git',
    'REST API',
    'FastAPI',
    'Python'
  ];
}
