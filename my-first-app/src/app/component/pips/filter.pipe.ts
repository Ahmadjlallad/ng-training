import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false, //  the default behaver is not update the ui when ever the value is updated
  // but by setting it to false it will rerender the ui
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString, propName): any[] {
    console.log(filterString, propName);
    if (value.length <= 0) return value;
    const f = value.filter((item) => item[propName] === filterString);
    return f;
  }
}
