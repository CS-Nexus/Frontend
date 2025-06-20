import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProblemComponent } from './project-problem.component';

describe('ProjectProblemComponent', () => {
  let component: ProjectProblemComponent;
  let fixture: ComponentFixture<ProjectProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectProblemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
