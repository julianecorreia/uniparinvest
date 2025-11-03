import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Acao} from '../pages/tickers/acao.model';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {

  private readonly API_URL = 'http://localhost:8080/acoes';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Acao[]> {
    return this.http.get<Acao[]>(this.API_URL);
  }

}
