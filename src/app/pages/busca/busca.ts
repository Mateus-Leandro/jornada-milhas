import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PassagensService } from '../../core/services/passagens/passagens';
import { Passagem } from '../../core/types/passagens';
import { FormBuscaService } from '../../core/services/form-busca/form-busca.service';
import { DadosBusca } from '../../core/types/busca';

@Component({
  selector: 'app-busca',
  standalone: false,
  templateUrl: './busca.html',
  styleUrl: './busca.scss',
})
export class Busca implements OnInit {
  passagens: Passagem[] = [];
  constructor(
    private passagensService: PassagensService,
    private cdr: ChangeDetectorRef,
    private formBuscaService: FormBuscaService,
  ) {}

  ngOnInit(): void {
    const buscaPadrao = {
      data: new Date().toISOString,
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    const busca = this.formBuscaService.formEstaValido
      ? this.formBuscaService.obterDadosDeBusca()
      : buscaPadrao;

    this.passagensService.getPassagens(busca).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
      this.cdr.detectChanges();
    });
  }

  busca(ev: DadosBusca) {
    this.passagensService.getPassagens(ev).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
      this.cdr.detectChanges();
    });
  }
}
