import { Component, Input, Output } from '@angular/core';
import { WordleCase, WordleLineComponent } from '../wordle-line/wordle-line.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wordle-game',
  standalone: true,
  imports: [
    WordleLineComponent,
    FormsModule,
  ],
  templateUrl: './wordle-game.component.html',
  styleUrl: './wordle-game.component.scss',
})
export class WordleGameComponent {

  @Input({ required: true }) linesCount!: number;
  @Input({ required: true }) wordLength!: number;
  grid: WordleCase[] = [];
  secretWord = 'COUCOU';
  splitSecretWord = this.secretWord.split('');
  proposition = '';
  tries = 0;

  defineGridStartup() {
    if (this.tries === 0) {
      this.grid = Array(this.linesCount).fill(
        Array(this.wordLength).fill(
          {
            letter: '',
            validationState: 'empty',
          }),
      );
    }

    return this.grid;
  }

  onPropositionSubmit() {
    for (let [propositionElement, index] of this.proposition) {
      if (propositionElement == this.splitSecretWord[index]) {
        this.grid[this.tries][index] = {
          letter: propositionElement,
          validationState: 'good',
        };
      } else {
        let otherPositionFound = false;
        for (let [letterSecretWord, index2] of this.splitSecretWord) {
          if (propositionElement == letterSecretWord) {
            otherPositionFound = true;
            this.grid[this.tries][index] = {
              letter: propositionElement,
              validationState: 'bad-placed',
            };
          }
        }
        if (!otherPositionFound) {
          this.grid[this.tries][index] = {
            letter: propositionElement,
            validationState: 'bad',
          };
        }
      }
    }

    this.tries++;
  }

}
