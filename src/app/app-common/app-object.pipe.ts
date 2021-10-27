import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appObjectKeys',
})
export class ObjectKeysPipe implements PipeTransform {
  public transform(value: any): any {
    return value ? Object.keys(value) : value;
  }
}
