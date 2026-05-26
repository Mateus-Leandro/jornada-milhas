import { Component } from '@angular/core';
import { PassagensService } from '../../../../../core/services/passagens/passagens';
import { FormBuscaService } from '../../../../../core/services/form-busca/form-busca.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-precos',
  standalone: false,
  templateUrl: './precos.html',
  styleUrl: './precos.scss',
})
export class Precos {
  precoMin: FormControl<number>;
  precoMax: FormControl<number>;

  constructor(
    public passagemService: PassagensService,
    private formBuscaService: FormBuscaService,
  ) {
    this.precoMin = this.formBuscaService.obterControle<number>('precoMin');
    this.precoMax = this.formBuscaService.obterControle<number>('precoMax');
  }
}
