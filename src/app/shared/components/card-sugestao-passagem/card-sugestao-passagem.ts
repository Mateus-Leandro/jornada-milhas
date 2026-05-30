import { Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-card-sugestao-passagem',
  standalone: false,
  templateUrl: './card-sugestao-passagem.html',
  styleUrl: './card-sugestao-passagem.scss',
})
export class CardSugestaoPassagem {
  @Input({ required: true }) titulo = '';
  @Input({ required: true }) preco = 0;
  @Input({ required: true }) tempo = 0;
}
