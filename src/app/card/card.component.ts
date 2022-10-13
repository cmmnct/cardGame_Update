import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;

  constructor() {

   }

  getBackgroundImage(item:any) {
    if (this.card.selected === true) {
       // let backgroundUrl = 'url(assets/img/'+ item.card1 + '.jpg)'
    const backgroundUrl = `url(assets/img/${item.card1}.jpg)`;
    return backgroundUrl;
    }
    else return null;

  }

  ngOnInit() {
    this.card.selected = false;
  }

}
