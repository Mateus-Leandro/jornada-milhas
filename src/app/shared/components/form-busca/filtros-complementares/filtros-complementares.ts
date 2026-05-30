import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from '../../../../core/services/form-busca/form-busca.service';
import { PassagensService } from '../../../../core/services/passagens/passagens';

@Component({
  standalone: false,
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.html',
  styleUrl: './filtros-complementares.scss',
})
export class FiltrosComplementares {
  constructor(
    public formBuscaService: FormBuscaService,
    private passagemService: PassagensService,
  ) {}
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

  limparFiltros() {
    this.formBuscaService.formBusca.patchValue({
      conexoes: null,
      companhias: null,
      precoMin: this.passagemService.precoMinimo,
      precoMax: this.passagemService.precoMaximo,
    });
    this.realizarBusca.emit(this.formBuscaService.obterDadosDeBusca());
  }
}
