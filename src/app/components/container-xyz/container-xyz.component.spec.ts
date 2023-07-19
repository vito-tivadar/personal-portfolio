import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerXyzComponent } from './container-xyz.component';

describe('ContainerXyzComponent', () => {
  let component: ContainerXyzComponent;
  let fixture: ComponentFixture<ContainerXyzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerXyzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerXyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
