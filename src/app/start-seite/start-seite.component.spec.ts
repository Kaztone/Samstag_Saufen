import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSeiteComponent } from './start-seite.component';

describe('StartSeiteComponent', () => {
  let component: StartSeiteComponent;
  let fixture: ComponentFixture<StartSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSeiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
