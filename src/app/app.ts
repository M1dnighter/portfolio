import { Component, signal } from '@angular/core';

import { Hero } from './features/hero/hero';
import { Stats } from './features/stats/stats';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Contacts } from './features/contacts/contacts';
import { FeaturedProject } from './features/featured-project/featured-project';
import { Relevance } from './features/relevance/relevance';

@Component({
  selector: 'app-root',
  imports: [Hero, Stats, Skills, Projects, Contacts, FeaturedProject, Relevance],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
