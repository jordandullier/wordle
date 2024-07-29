import { Component, Input } from '@angular/core';
import { caseStateValidation, WordleCaseComponent } from '../wordle-case/wordle-case.component';

export interface WordleCase {
  letter: string,
  validationState: caseStateValidation
}

@Component({
  selector: 'app-wordle-line',
  standalone: true,
  imports: [
    WordleCaseComponent,
  ],
  templateUrl: './wordle-line.component.html',
  styleUrl: './wordle-line.component.scss',
})
export class WordleLineComponent {
  @Input({ required: true }) lineLetters: WordleCase[] = [];

}
