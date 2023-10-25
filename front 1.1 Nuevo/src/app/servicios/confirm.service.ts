import { Injectable } from '@angular/core';
import { IVRS } from '../interface/ivr';
@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor() { }
  ivr:any=null;

  public getivr(){
    return this.ivr;
  }

  public postivr(x:any){
this.ivr=x;
  }
}
