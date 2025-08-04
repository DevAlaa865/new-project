import { AbstractControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";

 export function passwordmatch(signformgrou:AbstractControl) :null|ValidationErrors 
{
 
  let password=signformgrou.value.password;
  let rePassword=signformgrou.value.rePassword
  if(password==rePassword)
  {
    return null;
  }
    return {passwordmismtch:true}
}