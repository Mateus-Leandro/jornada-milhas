import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../../../shared/components/modal/modal';
import { MatChipSelectionChange } from '@angular/material/chips';
import { DadosBusca } from '../../types/busca';
import { UnidadeFederativa } from '../../types/unidade-federativa';

export type TipoPassagem = 'Executiva' | 'Econômica';

@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor(private dialog: MatDialog) {
    const somenteIda = new FormControl(false, [Validators.required]);
    const dataVolta = new FormControl(null, [Validators.required]);

    this.formBusca = new FormGroup({
      somenteIda,
      origem: new FormControl<UnidadeFederativa | null>(null, [Validators.required]),
      destino: new FormControl<UnidadeFederativa | null>(null, [Validators.required]),
      tipo: new FormControl<TipoPassagem>('Econômica'),
      passageirosAdultos: new FormControl(1),
      passageirosCriancas: new FormControl(0),
      passageirosBebes: new FormControl(0),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta,
      conexoes: new FormControl(null),
      companhias: new FormControl(null),
      precoMin: new FormControl(null),
      precoMax: new FormControl(null),
    });

    somenteIda.valueChanges.subscribe((somenteIda) => {
      if (somenteIda) {
        dataVolta.disable();
        dataVolta.clearValidators();
      } else {
        dataVolta.enable();
        dataVolta.setValidators([Validators.required]);
      }

      dataVolta.updateValueAndValidity();
    });
  }

  openDialog() {
    this.dialog.open(Modal, {
      width: '50%',
    });
  }

  obterControle<T>(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl<T>;
  }

  obterDadosDeBusca(): DadosBusca {
    const dataIdaControl = this.obterControle<Date>('dataIda').value;

    const dadosBusca: DadosBusca = {
      pagina: 1,
      porPagina: 50,
      somenteIda: this.obterControle<boolean>('somenteIda').value,
      origemId: this.obterControle<UnidadeFederativa>('origem').value?.id,
      destinoId: this.obterControle<UnidadeFederativa>('destino').value?.id,
      tipo: this.obterControle<TipoPassagem>('tipo').value,
      passageirosAdultos: this.obterControle<number>('passageirosAdultos').value,
      passageirosCriancas: this.obterControle<number>('passageirosCriancas').value,
      passageirosBebes: this.obterControle<number>('passageirosBebes').value,
      dataIda: dataIdaControl.toISOString(),
    };

    const dataVoltaControl = this.obterControle<Date>('dataVolta').value;

    if (dataVoltaControl) {
      dadosBusca.dataVolta = dataVoltaControl.toISOString();
    }

    const conexoesControl = this.obterControle<number>('conexoes');
    if (conexoesControl.value) {
      dadosBusca.conexoes = conexoesControl.value;
    }

    const companhiaControl = this.obterControle<number[]>('companhias');
    if (companhiaControl.value) {
      dadosBusca.companhiasId = companhiaControl.value;
    }

    const precoMinControl = this.obterControle<number>('precoMin');
    if (precoMinControl.value) {
      dadosBusca.precoMin = precoMinControl.value;
    }
    const precoMaxControl = this.obterControle<number>('precoMax');
    if (precoMaxControl.value) {
      dadosBusca.precoMax = precoMaxControl.value;
    }

    return dadosBusca;
  }

  getDescricaoPassageiros(): string {
    let descricao = '';
    const adultos = this.adultos;
    const criancas = this.criancas;
    const bebes = this.bebes;

    if (adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's ' : ''}`;
    }

    if (criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} crianca${criancas > 1 ? 's' : ''}`;
    }

    if (bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebe${bebes > 1 ? 's' : ''}`;
    }

    return descricao;
  }

  trocarOrigemDestino(): void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;

    this.formBusca.patchValue({
      origem: destino,
      destino: origem,
    });
  }

  get somenteIda(): boolean {
    return this.formBusca.get('somenteIda')?.value || false;
  }

  get origem(): string {
    return this.formBusca.get('origem')?.value || '';
  }

  get destino(): string {
    return this.formBusca.get('destino')?.value || '';
  }

  get tipo(): TipoPassagem {
    return this.formBusca.get('tipo')?.value || '';
  }

  get adultos(): number {
    return this.formBusca.get('passageirosAdultos')?.value || 0;
  }

  get criancas(): number {
    return this.formBusca.get('passageirosCriancas')?.value || 0;
  }

  get bebes(): number {
    return this.formBusca.get('passageirosBebes')?.value || 0;
  }

  get formEstaValido() {
    return this.formBusca.valid;
  }

  alterarTipo(evento: MatChipSelectionChange, tipoPassagem: TipoPassagem) {
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo: tipoPassagem,
      });
    }
  }
}
