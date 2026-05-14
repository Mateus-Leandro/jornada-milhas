//Código omitido

import { Companhia } from '../companhias';
import { Orcamento } from '../orcamento';
import { UnidadeFederativa } from '../unidade-federativa';

export interface Passagem {
  tipo: string;
  precoIda: number;
  precoVolta: number;
  taxaEmbarque: number;
  conexoes: number;
  tempoVoo: number;
  origem: UnidadeFederativa;
  destino: UnidadeFederativa;
  companhia: Companhia;
  dataIda: Date;
  dataVolta: Date;
  total: number;
  orcamento: Orcamento[];
}


