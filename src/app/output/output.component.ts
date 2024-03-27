import { Component } from '@angular/core';
import {TipHandlerService} from "../tipHandler-service";
import {Router} from "@angular/router";
import {TipData} from "../tip-data";
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
  host : {class : 'innerClass'}
})

export class OutputComponent {
  tipData : TipData;
  constructor(private service: TipHandlerService) {
    this.tipData = service.tipData;
  }

}
