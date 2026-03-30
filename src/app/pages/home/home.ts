import { Component, OnInit, signal } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao/promocao.service';
import { Promocao } from '../../core/types/promocao';
import { Depoimentos } from '../../core/types/depoimentos';
import { DepoimentosService } from '../../core/services/depoimentos/depoimentos.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  promocoes = signal<Promocao[]>([]);
  depoimentos = signal<Depoimentos[]>([]);

  constructor(
    private servicoPromocao: PromocaoService,
    private servicoDepoimentos: DepoimentosService,
  ) {}

  ngOnInit(): void {
    this.servicoPromocao.listar().subscribe((resposta) => {
      this.promocoes.set(resposta);
    });

    this.servicoDepoimentos.listar().subscribe((resposta) => {
      this.depoimentos.set(resposta);
    });
  }
}
