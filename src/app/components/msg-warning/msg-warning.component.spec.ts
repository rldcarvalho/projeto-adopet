import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgWarningComponent } from './msg-warning.component';

describe('MsgWarningComponent', () => {
  let component: MsgWarningComponent;
  let fixture: ComponentFixture<MsgWarningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgWarningComponent]
    });
    fixture = TestBed.createComponent(MsgWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
