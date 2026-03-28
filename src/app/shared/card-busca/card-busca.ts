import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  standalone: false,
  templateUrl: './card-busca.html',
  styleUrl: './card-busca.scss',
})
export class CardBusca {
  imagem = input.required<string>();
  alt = input.required<string>();
  nomeLocal = input.required<string>();
  valor = input.required<string>();
}
