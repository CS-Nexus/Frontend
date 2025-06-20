import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedSolutionComponent } from './proposed-solution.component';

describe('ProposedSolutionComponent', () => {
  let component: ProposedSolutionComponent;
  let fixture: ComponentFixture<ProposedSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposedSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposedSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
