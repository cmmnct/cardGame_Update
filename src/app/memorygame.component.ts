import { Component } from '@angular/core';
import { CardService } from './services/card.service';
import { SoundService } from './services/sound.service';
import { Observable, timer, Subscription } from 'rxjs';
import { Card } from './models/card.model';
import { TimerService } from './services/timer.service';
import { GameplayService } from './services/gameplay.service';

@Component({
  selector: 'app-root',
  templateUrl: './memorygame.component.html',
  styleUrls: ['./memorygame.component.css']
})

export class MemorygameComponent {
  timerSubscription!: Subscription;
  card1!: Card;
  card2!: Card;
  score = 0;
  tries = 0;
  numberOfPictures = 0;
  cardset!: Card[];
  timerText: String = '0 : 00 : 00';
  showFooter = false;
  boardClass = '';
  boardSizes = {
    sizes: [4, 5, 6]
  };
  clickEnabled: Boolean = true;
  windowHeight = '600px';
  selectedFieldsize: number;

  constructor(private cardService: CardService,
    public soundService: SoundService, private timerService: TimerService, private gameplayService: GameplayService
  ) { }

  onSelectFieldSize(event:Event) {
    this.gameplayService.initGame(event);

    this.clickEnabled = true;

    switch (this.selectedFieldsize) {
      case 4:
        this.boardClass = 'board4';
        break;
      case 4:
        this.boardClass = 'board5';
        break;
      case 4:
        this.boardClass = 'board6';
        break;
    }

    this.cardService.getCardset(this.selectedFieldsize).subscribe((data => {
      this.cardset = data;
      this.numberOfPictures = this.cardset.length / 2;
      this.showFooter = true;
      this.timerSubscription = this.gameplayService.gameTimer.subscribe(t => {
        this.timerText = this.gameplayService.timerText;
        this.tries = this.gameplayService.tries;
        this.score = this.gameplayService.score;
      });
    }));
  }
  onClickCard(card:Card) {
    this.gameplayService.handleMoves(card);

  }
}
