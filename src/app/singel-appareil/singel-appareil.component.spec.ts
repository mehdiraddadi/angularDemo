import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingelAppareilComponent } from './singel-appareil.component';

describe('SingelAppareilComponent', () => {
  let component: SingelAppareilComponent;
  let fixture: ComponentFixture<SingelAppareilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingelAppareilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingelAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
