import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PassagensService } from '../../core/services/passagens/passagens';
import { Passagem } from '../../core/types/passagens';

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
    this.passagensService.getPassagens(buscaPadrao).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
      this.cdr.detectChanges();
    });
  }
}
