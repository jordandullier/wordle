import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleCaseComponent } from './wordle-case.component';
import {By} from "@angular/platform-browser";

describe('WordleCaseComponent', () => {
  let component: WordleCaseComponent;
  let fixture: ComponentFixture<WordleCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordleCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Quand le validation state est 'bad', la classe retournée est 'bad-letter'", () => {
    component.validationState = 'bad'
    fixture.detectChanges();
    expect(component.getClassValidationState()).toBe('bad-letter')
  })

  it("Quand le validation state est 'bad-placed', la classe retournée est 'bad-placed-letter'", () => {
    component.validationState = 'bad-placed'
    fixture.detectChanges();
    expect(component.getClassValidationState()).toBe('bad-placed-letter')
  })

  it("Quand le validation state est 'good', la classe retournée est 'good-letter'", () => {
    component.validationState = 'good'
    fixture.detectChanges();
    expect(component.getClassValidationState()).toBe('good-letter')
  })

  it("Quand je défini une lettre dans une case elle s'affiche", () => {
    const lettre = 'A'
    component.letter = lettre
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.wordle-letter')).nativeElement.textContent)
      .toContain(lettre)
  })

  it("Quand la lettre est bonne, elle a le style associé à une bonne lettre", () => {
    component.letter = 'A'
    component.validationState = 'good'
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.good-letter')).nativeElement
    expect(element).toBeTruthy()
  })

  it("Quand la lettre est mal placée, elle a le style associé à une lettre mal placée", () => {
    component.letter = 'A'
    component.validationState = 'bad-placed'
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.bad-placed-letter')).nativeElement
    expect(element).toBeTruthy()
  })

  it("Quand la lettre est mauvaise, elle a le style associé à une lettre mauvaise", () => {
    component.letter = 'A'
    component.validationState = 'bad'
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('.bad-letter')).nativeElement
    expect(element).toBeTruthy()
  })
});
