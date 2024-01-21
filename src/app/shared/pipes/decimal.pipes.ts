import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal',
})
export class DecimalPipe implements PipeTransform {
  transform(value: number | string, decimalPlaces: number = 2): string {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    return isNaN(numericValue) ? 'N/A' : numericValue.toFixed(decimalPlaces);
  }
}
