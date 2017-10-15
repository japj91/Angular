import { Pipe, PipeTransform} from '@angular/core';

@Pipe ({name: 'phoneConversion'})


export class PhoneConversion implements PipeTransform{
    public str:string
    transform(number:string):string{
        var pat = /^[0-9]*$/;

        console.log(number.substring(0,3));
        if (pat.test(number) == true) {  // i have to test the string i cant just test the number
           return "("+number.substring(0,3)+")-"+number.substring(3,6)+"-"+number.substring(6,number.length);
        }
        else {
            return " Numbers not entered";
        }
    }
}
