import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkExistImage'
})
export class CheckExistImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
