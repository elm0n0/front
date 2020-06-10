import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerPoliciaComponent } from './logger-policia.component';

describe('LoggerPoliciaComponent', () => {
  let component: LoggerPoliciaComponent;
  let fixture: ComponentFixture<LoggerPoliciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggerPoliciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerPoliciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
