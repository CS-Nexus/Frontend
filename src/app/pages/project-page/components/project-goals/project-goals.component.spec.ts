import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGoalsComponent } from './project-goals.component';

describe('ProjectGoalsComponent', () => {
  let component: ProjectGoalsComponent;
  let fixture: ComponentFixture<ProjectGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
