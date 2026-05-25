import { Component } from '@angular/core';

@Component({
  selector: 'app-paradas',
  standalone: false,
  templateUrl: './paradas.html',
  styleUrl: './paradas.scss',
})
export class Paradas {
  opcoes = [
    {
      display: 'Direto',
      value: '0',
    },
    {
      display: '1 conexão',
      value: '1',
    },
    {
      display: '2 conexões',
      value: '2',
    },
    {
      display: 'Mais de 2 conexões',
      value: '3',
    },
  ];
}
