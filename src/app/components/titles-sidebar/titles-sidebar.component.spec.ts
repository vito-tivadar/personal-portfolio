import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesSidebarComponent } from './titles-sidebar.component';

describe('TitlesSidebarComponent', () => {
  let component: TitlesSidebarComponent;
  let fixture: ComponentFixture<TitlesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
