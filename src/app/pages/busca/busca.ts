import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PassagensService } from '../../core/services/passagens/passagens';
import { Destaques, Passagem } from '../../core/types/passagens';
import { FormBuscaService } from '../../core/services/form-busca/form-busca.service';
import { DadosBusca } from '../../core/types/busca';
import { take } from 'rxjs';

@Component({
  selector: 'app-busca',
  standalone: false,
  templateUrl: './busca.html',
  styleUrl: './busca.scss',
})
export class Busca implements OnInit {
  passagens: Passagem[] = [];
  destaques: Destaques | undefined;

  constructor(
    private passagensService: PassagensService,
    private cdr: ChangeDetectorRef,
    private formBuscaService: FormBuscaService,
  ) {}

  ngOnInit(): void {
    const buscaPadrao: DadosBusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    const busca = this.formBuscaService.formEstaValido
      ? this.formBuscaService.obterDadosDeBusca()
      : buscaPadrao;

    this.passagensService
      .getPassagens(busca)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
        this.passagens = res.resultado;
        this.destaques = this.passagensService.obterPassagensDestaques(this.passagens);
        this.formBuscaService.formBusca.patchValue({
          precoMin: res.precoMin,
          precoMax: res.precoMax,
        });
        this.cdr.detectChanges();
      });
  }

  busca(ev: DadosBusca) {
    this.passagensService.getPassagens(ev).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
      this.destaques = this.passagensService.obterPassagensDestaques(this.passagens);
      this.cdr.detectChanges();
    });
  }
}
