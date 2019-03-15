import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McopComponent } from './mcop.component';

describe('McopComponent', () => {
  let component: McopComponent;
  let fixture: ComponentFixture<McopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
