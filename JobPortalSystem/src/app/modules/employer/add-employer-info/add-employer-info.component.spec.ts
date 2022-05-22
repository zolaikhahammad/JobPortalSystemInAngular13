import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployerInfoComponent } from './add-employer-info.component';

describe('AddEmployerInfoComponent', () => {
  let component: AddEmployerInfoComponent;
  let fixture: ComponentFixture<AddEmployerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
