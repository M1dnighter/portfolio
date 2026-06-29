import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  stack: string[];
  features: string[];
  github: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projects: Project[] = [
    {
      title: 'Supplier Finder AI',
      description:
        'Веб-приложение для поиска поставщиков продуктов питания с автоматическим ранжированием результатов при помощи искусственного интеллекта.',

      stack: [
        'Angular',
        'TypeScript',
        'FastAPI',
        'Python',
        'Gemini AI',
        'REST API'
      ],

      features: [
        'Поиск поставщиков по товару и региону',
        'Интеграция внешних источников данных',
        'Анализ сайтов поставщиков',
        'AI-оценка и ранжирование результатов',
        'Адаптивный интерфейс'
      ],

      github: 'ТВОЙ_GITHUB_URL'
    },

    {
      title: 'Movie Catalog',
      description:
        'Каталог фильмов с поиском, отображением карточек и работой с API.',

      stack: [
        'Angular',
        'TypeScript',
        'RxJS',
        'SCSS',
        'JSON Server'
      ],

      features: [
        'Поиск фильмов',
        'Работа с REST API',
        'Компонентная архитектура',
        'Адаптивная верстка',
        'Обработка пользовательских запросов'
      ],

      github: 'https://github.com/M1dnighter/angular-movie-catalog'
    },

    {
      title: 'Search App',
      description:
        'Приложение поиска с историей запросов и интеграцией внешнего API.',

      stack: [
        'Angular',
        'RxJS',
        'TypeScript',
        'Wikipedia API'
      ],

      features: [
        'История поиска',
        'Подсказки',
        'Debounce запросов',
        'Работа с API',
        'Обработка состояний загрузки'
      ],

      github: 'https://github.com/M1dnighter/angular-search-app'
    }
  ];
}
