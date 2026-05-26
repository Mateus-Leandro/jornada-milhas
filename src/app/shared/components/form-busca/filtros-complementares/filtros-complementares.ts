import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from '../../../../core/services/form-busca/form-busca.service';

@Component({
  standalone: false,
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.html',
  styleUrl: './filtros-complementares.scss',
})
export class FiltrosComplementares {
  constructor(public formBuscaService: FormBuscaService) {}
  @Output() realizarBusca = new EventEmitter();

  busca() {
    if (!this.formBuscaService.formEstaValido) {
      this.formBuscaService.formBusca.markAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      return;
    }
    this.realizarBusca.emit(this.formBuscaService.obterDadosDeBusca());
  }
}
