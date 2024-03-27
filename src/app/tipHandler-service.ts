import { Injectable } from '@angular/core';
import {TipData} from "./tip-data";

@Injectable({
  providedIn: 'root'
})
export class TipHandlerService {

  tipData : TipData = new TipData();

  submitUserPreference(tipData: TipData): void {
    this.tipData = tipData;
    console.log("submitted Tip Data: ", tipData);
  }

}
