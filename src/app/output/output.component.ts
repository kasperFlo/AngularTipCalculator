import { Component } from '@angular/core';
import {TipHandlerService} from "../tipHandler-service";
import {Router} from "@angular/router";
import {TipData} from "../tip-data";
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})

export class OutputComponent {
  tipData : TipData;
  constructor(private service: TipHandlerService) {
    this.tipData = service.tipData;
  }

}
