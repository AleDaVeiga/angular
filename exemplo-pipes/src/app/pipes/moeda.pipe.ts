import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // console.log(`Valor: ${value}`);
    return `R$$ ${value} ${args[0] ? args[0] : ''}`;
  }

}
