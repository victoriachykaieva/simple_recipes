import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesContentComponent } from './recipes-content.component';

describe('RecipesContentComponent', () => {
  let component: RecipesContentComponent;
  let fixture: ComponentFixture<RecipesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
