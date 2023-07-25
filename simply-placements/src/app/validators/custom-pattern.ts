import { AbstractControl, ValidatorFn } from "@angular/forms";

export function checker(p:RegExp):ValidatorFn{
    return (formVals: AbstractControl):{[key:string]:any}|null=>{
        const valCheck= p.test(formVals.value)
        return valCheck?{'p':{value:formVals.value}}:null
    }
}