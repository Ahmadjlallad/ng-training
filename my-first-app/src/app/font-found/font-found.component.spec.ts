import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontFoundComponent } from './font-found.component';

describe('FontFoundComponent', () => {
  let component: FontFoundComponent;
  let fixture: ComponentFixture<FontFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
