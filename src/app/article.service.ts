import { Injectable } from '@angular/core';
import { Article } from './article';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ArticleService {
  articles: Article[];

  constructor() {
    this.articles = JSON.parse(localStorage.getItem('articles')) || [];
    console.log(this.articles);
  }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

}
