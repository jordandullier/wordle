import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleGameComponent } from './wordle-game.component';
import { By } from '@angular/platform-browser';

describe('WordleGameComponent', () => {
  let component: WordleGameComponent;
  let fixture: ComponentFixture<WordleGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordleGameComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(WordleGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Doit afficher la grille', () => {
    expect(fixture.debugElement.query(By.css('.game-wordle')).nativeElement).toBeTruthy();
  });

  it('Doit afficher une grille composée de 5 lignes', () => {
    const gameLinesCount = 5;
    const wordLength = 5;
    component.linesCount = gameLinesCount;
    component.wordLength = wordLength;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.game-wordle')).nativeElement.children.length).toBe(gameLinesCount);
  });

  it('Doit afficher perdu au dela du nombre de tentative', () => {
    component.linesCount = 5;
    component.tries = 5;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.game-wordle-result')).nativeElement.textContent.trim())
      .toBe('PERDU');
  });

  it('Au clic la proposition est envoyée', () => {
    component.proposition = 'test';
    fixture.debugElement.query(By.css('.submit-form')).nativeElement.click();
    expect(component.onPropositionSubmit()).toHaveBeenCalledTimes(1);
  });

});
