import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-seletor-quantidade',
  standalone: false,
  templateUrl: './seletor-quantidade.html',
  styleUrl: './seletor-quantidade.scss',
})
export class SeletorQuantidade {
  valor = model<number>(0);
  minimo = input<number>(0);

  incrementar() {
    this.valor.update((v) => v + 1);
  }

  decrementar() {
    if (this.valor() > this.minimo()) {
      this.valor.update((v) => v - 1);
    }
  }
}
