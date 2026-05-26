import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Resultado } from '../../types/resultado';
import { Observable } from 'rxjs';
import { DadosBusca } from '../../types/busca';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getPassagens(search: DadosBusca): Observable<Resultado> {
    const params = this.converterParametroParaString(search);
    return this.httpClient.get<Resultado>(this.apiUrl + '/passagem/search?' + params);
  }

  converterParametroParaString(busca: DadosBusca) {
    const query = Object.entries(busca)
      .map(([key, value]) => {
        if (!value) {
          return '';
        }
        return `${key}=${value}`;
      })
      .join('&');
    return query;
  }
}
