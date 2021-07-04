import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldlistComponent } from './worldlist.component';

describe('WorldlistComponent', () => {
  let component: WorldlistComponent;
  let fixture: ComponentFixture<WorldlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
