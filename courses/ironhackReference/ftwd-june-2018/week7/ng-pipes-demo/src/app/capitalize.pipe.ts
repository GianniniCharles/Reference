import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'supercapitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(theThingThatWereModifying: any, args?: any): any {
    theThingThatWereModifying = theThingThatWereModifying.toLowerCase();
    return theThingThatWereModifying.substring(0, 1).toUpperCase() + theThingThatWereModifying.substring(1);
  }

}
