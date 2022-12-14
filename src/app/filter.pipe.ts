import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string,propertyName:string) {
    if(value.length === 0 || filterString === '')
      return value;
    const resultArray=[];
    for(const item of value)
    {
      if(item[propertyName] === filterString)
        resultArray.push(item);
    }
    return resultArray;
  }

}
