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
    });
  }

  get somenteIda() {
    return this.formBusca.get('somenteIda')?.value || false;
  }
}
