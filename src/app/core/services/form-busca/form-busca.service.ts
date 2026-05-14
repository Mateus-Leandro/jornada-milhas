import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../../../shared/components/modal/modal';
import { MatChipSelectionChange } from '@angular/material/chips';

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
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl<TipoPassagem>('Econômica'),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta,
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

  obterControle(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
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
    return this.formBusca.get('adultos')?.value || 0;
  }

  get criancas(): number {
    return this.formBusca.get('criancas')?.value || 0;
  }

  get bebes(): number {
    return this.formBusca.get('bebes')?.value || 0;
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
