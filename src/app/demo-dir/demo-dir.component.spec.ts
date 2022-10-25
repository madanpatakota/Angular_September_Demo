import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDirComponent } from './demo-dir.component';

describe('DemoDirComponent', () => {
  let component: DemoDirComponent;
  let fixture: ComponentFixture<DemoDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
