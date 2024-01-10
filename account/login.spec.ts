import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true when onSubmit is called', () => {
    component.onSubmit();
    expect(component.submitted).toBeTrue();
  });

  it('should return false if the form is invalid', () => {
    component.form.controls['username'].setValue('');
    component.form.controls['password'].setValue('');
    expect(component.onSubmit()).toBeFalse();
  });

  it('should return true if the form is valid', () => {
    component.form.controls['username'].setValue('testuser');
    component.form.controls['password'].setValue('testpassword');
    expect(component.onSubmit()).toBeTrue();
  });

  it('should display error message if username is invalid', () => {
    component.form.controls['username'].setValue('');
    component.form.controls['password'].setValue('testpassword');
    component.onSubmit();
    fixture.detectChanges();
    const invalidUsernameElement = fixture.nativeElement.querySelector('.invalid-feedback > div');
    expect(invalidUsernameElement.textContent).toContain('Username is required');
  });

  it('should display error message if password is invalid', () => {
    component.form.controls['username'].setValue('testuser');
    component.form.controls['password'].setValue('');
    component.onSubmit();
    fixture.detectChanges();
    const invalidPasswordElement = fixture.nativeElement.querySelectorAll('.invalid-feedback > div')[1];
    expect(invalidPasswordElement.textContent).toContain('Password is required');
  });
});
