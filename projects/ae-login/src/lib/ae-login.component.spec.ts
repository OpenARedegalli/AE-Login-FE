import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeLoginComponent } from './ae-login.component';

describe('AeLoginComponent', () => {
  let component: AeLoginComponent;
  let fixture: ComponentFixture<AeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
