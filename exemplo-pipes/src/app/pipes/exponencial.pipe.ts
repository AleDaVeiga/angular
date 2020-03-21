import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponencial'
})
export class ExponencialPipe implements PipeTransform {

  transform(valor: number, exponencial?: number): number {
    // console.log(`Valor: ${valor}\n Exponencial: ${exponencial}`);
    return Math.pow(valor, isNaN(exponencial) ? 1 : exponencial);
  }

}
