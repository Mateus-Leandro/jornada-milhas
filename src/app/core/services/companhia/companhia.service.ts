import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Companhia } from '../../types/companhias';

@Injectable({
  providedIn: 'root',
})
export class CompanhiaService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Companhia[]> {
    return this.httpClient.get<Companhia[]>(`${this.apiUrl}/companhias`);
  }
}
