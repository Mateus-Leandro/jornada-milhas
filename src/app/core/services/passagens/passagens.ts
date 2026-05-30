import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Resultado } from '../../types/resultado';
import { Observable, take } from 'rxjs';
import { DadosBusca } from '../../types/busca';
import { Destaques, Passagem } from '../../types/passagens';

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

  obterPassagensDestaques(passagem: Passagem[]): Destaques | undefined {
    if (!passagem.length) {
      return undefined;
    }
    let ordenadoPorTempo = [...passagem].sort((a, b) => a.tempoVoo - b.tempoVoo);
    let ordenadoPorPreco = [...passagem].sort((a, b) => a.total - b.total);

    let maisRapida = ordenadoPorTempo[0];
    let maisBarata = ordenadoPorPreco[0];

    let ordenadoPorMedia = [...passagem].sort((a, b) => {
      let pontuacaoA = (a.tempoVoo / maisBarata.tempoVoo + a.total / maisBarata.total) / 2;
      let pontuacaoB = (b.tempoVoo / maisBarata.total + b.total / maisBarata.total) / 2;
      return pontuacaoA - pontuacaoB;
    });
    let sugerida = ordenadoPorMedia[0];

    return { maisRapida, maisBarata, sugerida };
  }
}
