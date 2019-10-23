import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientModule ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('policyForm invalid when empty', () => {
    expect(component.policyForm.valid).toBeFalsy();
});

  it('policyId field validity', () => {
    let errors = {};
    const policyId = component.policyForm.controls['policyId'];
    expect(policyId.valid).toBeFalsy();

    // policyId field is required
    errors = policyId.errors || {};
    expect(errors['required']).toBeTruthy();
    errors = policyId.errors || {};
     
     
    
});
});
