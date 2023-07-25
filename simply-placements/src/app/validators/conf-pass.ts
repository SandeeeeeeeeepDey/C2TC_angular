import { NonNullAssert } from "@angular/compiler";
import { AbstractControl } from "@angular/forms";

export function confirmPass(formVals:AbstractControl):{[key:string]:boolean}|null {
    const pass=formVals.get('password')
    const cPass=formVals.get('confirmPassword')
    if(pass?.pristine || cPass?.pristine) return null
    return pass && cPass && pass.value!==cPass.value?{'misMatch':true}:null
}