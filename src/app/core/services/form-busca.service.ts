import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor() {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
    });
  }

  obterControle(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
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
}
