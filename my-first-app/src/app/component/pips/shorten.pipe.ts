import { Pipe, PipeTransform } from '@angular/core';
// and need to provided it in the declarations array in the NgModule
@Pipe({
  name: 'shorten',
})
export class ShortensPip implements PipeTransform {
  // always ned to return a value
  transform(value: string, ...arg: number[]) {
    const { [0]: start, [1]: limit } = arg;
    if (value.length < limit) return value;
    return value.substring(start, limit) + '...';
  }
}
