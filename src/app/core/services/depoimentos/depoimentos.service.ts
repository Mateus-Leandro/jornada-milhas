import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Depoimentos } from '../../types/depoimentos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepoimentosService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Depoimentos[]> {
    return this.httpClient.get<Depoimentos[]>(`${this.apiUrl}/depoimentos`);
  }
}
