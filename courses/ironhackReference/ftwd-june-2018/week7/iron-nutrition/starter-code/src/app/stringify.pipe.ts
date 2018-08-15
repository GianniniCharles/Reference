import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify'
})
export class StringifyPipe implements PipeTransform {

  transform(originalNumber: any, args?: any): any {

      if(originalNumber===0){return 'zero'};
     const inputArray = originalNumber.toString().split('');
  
     let result = '';
  
      const singleDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      const doubleDigits = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
      
  
      if(inputArray.length === 1){
          return singleDigits[originalNumber];
      } else if (inputArray.length === 2){
          if(originalNumber >= 10 && originalNumber <=19){
              return singleDigits[originalNumber];
          }
          result += doubleDigits[Number(inputArray[0])];
          result +=' '
          result += singleDigits[Number(inputArray[1])];
          return result;
      } else if(inputArray.length === 3){
          result += singleDigits[Number(inputArray[0])]+' hundred';
          result += ' '
                  if(Number(inputArray[1]) === 1 ){
                      result += singleDigits[inputArray[1]+ inputArray[2]]; 
                      return result;
                  }
          result += doubleDigits[Number(inputArray[1])];
          result += ' '
          result += singleDigits[Number(inputArray[2])];
          return result;
  
      }
  
  
  }
  
  

}
