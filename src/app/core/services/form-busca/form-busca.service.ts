import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl<TipoPassagem>('Econômica'),
    });
  }

  obterControle(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  openDialog() {
    this.dialog.open(Modal, {
      width: '50%',
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

  alterarTipo(evento: MatChipSelectionChange, tipoPassagem: TipoPassagem) {
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo: tipoPassagem,
      });
    }
  }
}
