import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Promocao } from '../../core/types/promocao';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  promocoes: Promocao[] = [];

  constructor(private servicoPromocao: PromocaoService) {}

  ngOnInit(): void {
    this.servicoPromocao.listar().subscribe((resposta) => {
      this.promocoes = resposta;
    });
  }
}
