import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorlddetailComponent } from './worlddetail.component';

describe('WorlddetailComponent', () => {
  let component: WorlddetailComponent;
  let fixture: ComponentFixture<WorlddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorlddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorlddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
