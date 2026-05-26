import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Resultado } from '../../types/resultado';
import { Observable, take } from 'rxjs';
import { DadosBusca } from '../../types/busca';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  apiUrl: string = environment.apiUrl;
  precoMinimo: number = 0;
  precoMaximo: number = 0;
  constructor(private httpClient: HttpClient) {}

  getPassagens(search: DadosBusca): Observable<Resultado> {
    const params = this.converterParametroParaString(search);
    const obs = this.httpClient.get<Resultado>(this.apiUrl + '/passagem/search?' + params);

    obs.pipe(take(1)).subscribe((res) => {
      this.precoMinimo = res.precoMin;
      this.precoMaximo = res.precoMax;
    });
    return obs;
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
