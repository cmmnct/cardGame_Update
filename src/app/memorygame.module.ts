import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MemorygameComponent } from './memorygame.component';
import { CardComponent } from './card/card.component';

import {CardService} from './services/card.service';
import {SoundService} from './services/sound.service';
import { TimerService } from './services/timer.service';
import { GameplayService } from './services/gameplay.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    MemorygameComponent,
    CardComponent
  ],
  providers: [CardService, SoundService, TimerService, GameplayService],
  bootstrap: [
    MemorygameComponent
  ]
})
export class MemorygameModule {}
