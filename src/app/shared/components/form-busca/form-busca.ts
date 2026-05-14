import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from '../../../core/services/form-busca/form-busca.service';

@Component({
  selector: 'app-form-busca',
  standalone: false,
  templateUrl: './form-busca.html',
  styleUrl: './form-busca.scss',
})
export class FormBusca {
  @Output() realizarBusca = new EventEmitter();
  constructor(public formBuscaService: FormBuscaService) {}

  buscar() {
    if (!this.formBuscaService.formEstaValido) {
      return alert('O formulário precisa ser preenchido!');
    }

    const formBuscaValue = this.formBuscaService.formBusca.value;
    this.realizarBusca.emit(formBuscaValue);
  }
}
