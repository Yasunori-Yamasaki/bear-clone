import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndSearchBtnComponent } from './create-and-search-btn.component';

describe('CreateAndSearchBtnComponent', () => {
  let component: CreateAndSearchBtnComponent;
  let fixture: ComponentFixture<CreateAndSearchBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAndSearchBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAndSearchBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
