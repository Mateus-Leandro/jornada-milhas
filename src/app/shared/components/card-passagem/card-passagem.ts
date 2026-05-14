import { Component, Input } from '@angular/core';
import { Passagem } from '../../../core/types/passagens';

@Component({
  selector: 'app-card-passagem',
  standalone: false,
  templateUrl: './card-passagem.html',
  styleUrl: './card-passagem.scss',
  
})
export class CardPassagem {
  @Input({ required: true }) passagem!: Passagem;
}
