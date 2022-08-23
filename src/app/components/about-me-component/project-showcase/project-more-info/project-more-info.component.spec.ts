import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMoreInfoComponent } from './project-more-info.component';

describe('ProjectMoreInfoComponent', () => {
  let component: ProjectMoreInfoComponent;
  let fixture: ComponentFixture<ProjectMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMoreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
