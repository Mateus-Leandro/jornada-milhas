import { Component } from '@angular/core';

@Component({
  selector: 'app-precos',
  standalone: false,
  templateUrl: './precos.html',
  styleUrl: './precos.scss',
})
export class Precos {
  precoMin?: number = 0;
  precoMax?: number = 5000;
}
