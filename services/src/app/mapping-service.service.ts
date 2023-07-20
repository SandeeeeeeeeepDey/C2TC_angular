import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MappingServiceService {
  public info:{id:number; name:string, skills:string}[]=[
    {id:1,name:"Sandeep Dey", skills:"lazer Eyes"},
    {id:2,name:"Batman", skills:"Best Human Super Hero"},
    {id:3,name:"Doctor Strange", skills:"Coolest"},
    {id:4,name:"Tony Stark", skills:"Super Wacky"},
    {id:4,name:"Hulk", skills:"Smart and Indistructable"},
    {id:5,name:"John Lennon", skills:"Dreamer"} 
  ]
  constructor() { }
  getInfo(): {id:number; name:string; skills:string}[] {
    return this.info;
  }
}
