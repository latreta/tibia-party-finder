import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], columnFilter: string, valueFilter: string): any[] {
    const filteredResults = [];

    if (valueFilter == null || valueFilter.length <= 0){
      return value;
    }

    value.forEach(item => {
      if(item[columnFilter].search(valueFilter) !== -1){
        filteredResults.push(item);
      }
    });
    return filteredResults;
  }

}
