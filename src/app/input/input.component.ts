import { Component } from '@angular/core';
import {TipHandlerService} from "../tipHandler-service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  host : {class : 'innerClass'}
})
export class InputComponent {

  tipHandler : TipHandlerService = new TipHandlerService();
  constructor(private service : TipHandlerService , private router: Router) {
  }

  onSubmit(): void {
    this.service.submitUserPreference(this.tipHandler.tipData);
    this.router.navigate(["/output"])
  }
}
