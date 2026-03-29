import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brl',
  standalone: false,
})
export class BrlPipe implements PipeTransform {

 transform(valor: number): string {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

}
