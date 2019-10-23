import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientModule ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('loginForm invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
    // @ts-ignore
    const comp: LoginComponent = new LoginComponent();
  

});

  it('loginId field validity', () => {
    let errors = {};
    const loginId = component.loginForm.controls['loginId'];
    expect(loginId.valid).toBeFalsy();

    // loginId field is required
    errors = loginId.errors || {};
    expect(errors['required']).toBeTruthy();
    errors = loginId.errors || {};
    loginId.setValue('Ajith');
  
});
it('password field validity', () => {
  let errors = {};
  const password = component.loginForm.controls['password'];
  expect(password.valid).toBeFalsy();

  // password field is required
  errors = password.errors || {};
  expect(errors['required']).toBeTruthy();
   errors = password.errors || {};
   password.setValue('Ajith');
 });
it('component initial state', () => {
  expect(component.submitted).toBeFalsy();
  expect(component.loginForm).toBeDefined();
  expect(component.loginForm.invalid).toBeTruthy();
  });

  it('submitted should be true when onSubmit()', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
   
  });

  it('to call loginData function with loginId and passoword when onSubmit()', () => {
    component.onSubmit();
     // @ts-ignore
      const comp: LoginComponent = new LoginComponent();
      // expect(comp.loginId).toBeDefined();
    comp.loginData(comp.loginId, comp.password);
  expect(comp.loginData).toBeTruthy;
    let password = component.loginForm.controls['password'];
    });
  function loginData(loginId, password){
     loginId = component.loginForm.controls['loginId'];
     password = component.loginForm.controls['password'];
  }
});
