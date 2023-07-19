import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableTitleComponent } from './variable-title.component';

describe('VariableTitleComponent', () => {
  let component: VariableTitleComponent;
  let fixture: ComponentFixture<VariableTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
