import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  standalone: false,
  templateUrl: './card-depoimento.html',
  styleUrl: './card-depoimento.scss',
})
export class CardDepoimento {
  nome = input<string>('');
  mensagem = input<string>('');
  img = input<string>('');
  alt = input<string>('');
}
