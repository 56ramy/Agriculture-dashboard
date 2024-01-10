import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.form.value).toEqual({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    });
  });

  it('should disable the Register button when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();
    const registerButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(registerButton.disabled).toBeTrue();
  });

  it('should enable the Register button when loading is false', () => {
    component.loading = false;
    fixture.detectChanges();
    const registerButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(registerButton.disabled).toBeFalse();
  });

  it('should show an error message when First Name is required', () => {
    const firstNameInput = fixture.nativeElement.querySelector('input[name="firstName"]');
    firstNameInput.value = '';
    firstNameInput.dispatchEvent(new Event('input'));
    const form = component.form;
    form.controls.firstName.markAsTouched();
    fixture.detectChanges();
    const errorDiv = fixture.nativeElement.querySelector('.invalid-feedback');
    expect(errorDiv.textContent).toContain('First Name is required');
  });

  // more tests for other form fields and form validation
});
