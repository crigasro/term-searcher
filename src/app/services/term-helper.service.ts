import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TermList } from '../models/term-list';

@Injectable({
  providedIn: 'root'
})
export class TermHelperService {
  private readonly BASE_URL = 'https://chroniclingamerica.loc.gov/search';
  private readonly RES_FORMAT = 'json';

  constructor(
    private http: HttpClient
  ) { }

  getSearchedResults(term: string) {
    const url = `${this.BASE_URL}/titles/results/`;
    const params = new HttpParams()
      .set('terms', term)
      .set('format', this.RES_FORMAT);

    return this.http.get<TermList>(url, { params });
  }

}
