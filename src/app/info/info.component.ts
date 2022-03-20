import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  cardInfo = Array<{title: string, phoneNumber: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  clickedME() {
    let val = (<HTMLInputElement>document.getElementById("val")).value;
    let phoneNumber = (<HTMLInputElement>document.getElementById("tel")).value;
    if (val != "" && val != undefined && phoneNumber != "" && phoneNumber != undefined) {
      this.cardInfo.push({
        title: val,
        phoneNumber: phoneNumber
      });
    }
  }

}
