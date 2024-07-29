import { Component, Input } from '@angular/core';

export type caseStateValidation = 'empty' | 'bad' | 'bad-placed' | 'good'

@Component({
  selector: 'app-wordle-case',
  standalone: true,
  imports: [],
  templateUrl: './wordle-case.component.html',
  styleUrl: './wordle-case.component.scss',
})
export class WordleCaseComponent {
  @Input() letter?: string;
  @Input() validationState?: caseStateValidation;

  getClassValidationState() {
    if (this.validationState == 'bad') {
      return 'bad-letter';
    }

    if (this.validationState == 'bad-placed') {
      return 'bad-placed-letter';
    }

    if (this.validationState == 'good') {
      return 'good-letter';
    }
    return '';
  }
}
