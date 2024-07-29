import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleCase, WordleLineComponent } from './wordle-line.component';
import { By } from '@angular/platform-browser';

describe('WordleLineComponent', () => {
  let component: WordleLineComponent;
  let fixture: ComponentFixture<WordleLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordleLineComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(WordleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Doit afficher la ligne', () => {
    expect(fixture.debugElement.query(By.css('.line-wordle')).nativeElement).toBeTruthy();
  });

  it('Doit afficher le nombre de case demandé dans la ligne', () => {
    const emptyLetter: WordleCase = { letter: '', validationState: 'empty' };
    const letters = [emptyLetter, emptyLetter, emptyLetter, emptyLetter];
    component.lineLetters = letters;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.line-wordle')).nativeElement.children.length).toBe(letters.length);
  });
});
