import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkComponentComponent } from './my-work-component.component';

describe('MyWorkComponentComponent', () => {
  let component: MyWorkComponentComponent;
  let fixture: ComponentFixture<MyWorkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWorkComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
