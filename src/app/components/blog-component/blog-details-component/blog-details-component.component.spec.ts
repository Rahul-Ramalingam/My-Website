import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsComponentComponent } from './blog-details-component.component';

describe('BlogDetailsComponentComponent', () => {
  let component: BlogDetailsComponentComponent;
  let fixture: ComponentFixture<BlogDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
