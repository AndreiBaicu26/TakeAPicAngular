import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModifyGreenRectangleDimensionsService {

  constructor() { }
  
  selectedModifier = new Subject<string>();

  
  modify = (option: string) =>{
    this.selectedModifier.next(option);
  }

}
