import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPassword'
})
export class MaskPasswordPipe implements PipeTransform {

  transform(pass: string): string {

   const last2= pass.slice(pass.length-2,pass.length);
   console.log('====================================');
   console.log(last2);
   console.log('====================================');

    const size = pass.length;
    let maskedPassword = ''

    for (let i = 0; i < size; i++) {
      maskedPassword +="*"
    }
    
    return maskedPassword;
  }

}
