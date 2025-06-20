import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImpactComponent } from './project-impact.component';

describe('ProjectImpactComponent', () => {
  let component: ProjectImpactComponent;
  let fixture: ComponentFixture<ProjectImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectImpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
