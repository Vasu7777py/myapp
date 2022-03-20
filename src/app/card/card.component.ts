import {Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  cardData = {
    imgUrl: "https://picsum.photos/id/",
    title: "",
    phoneNumber: "",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, necessitatibus minus aspernatur odio voluptatibus laudantium praesentium in error mollitia, amet, enim commodi expedita eius alias optio. Aliquid dicta alias at?"
  }

  @Input()
  title= ""

  @Input()
  phoneNumber= ""

  constructor() {}

  ngOnInit(): void {
    this.cardData.title = this.title;
    this.cardData.phoneNumber = this.phoneNumber;
    let id = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    this.cardData.imgUrl += id + "/200"
  }

}
