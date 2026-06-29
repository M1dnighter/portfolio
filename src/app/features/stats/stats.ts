import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  stats = [
    {
      value: '6',
      suffix: 'лет',
      label: 'опыта программирования'
    },
    {
      value: '2021',
      label: 'начал работать с Angular'
    },
    {
      value: '30+',
      label: 'учеников по программированию'
    },
    {
      value: '3',
      suffix: 'года',
      label: 'работы в IT-проектах'
    }
  ];
}
