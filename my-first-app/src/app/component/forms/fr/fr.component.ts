import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fr',
  templateUrl: './fr.component.html',
  styleUrls: ['./fr.component.scss'],
})
export class FrComponent implements OnInit {
  genders = ['male', 'female'];
  constructor() {}
  signupForm: FormGroup;
  notAllowed = ['ahmad', 'jallad'];
  ngOnInit(): void {
    // we should initialized before views
    // using FormGroup we can create a new form group
    this.signupForm = new FormGroup({
      // adding a nested form groups to the form by
      userData: new FormGroup({
        // we have to set up the form control that is the field we have in the template
        // validation as second arg and its a call back func and we can add multiple as array
        username: new FormControl(null, [
          Validators.required,
          this.notAllowedValidator,
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      // than we have to connect it to template and we have to make a directives to the form
      // formGroup directive
      // I will add dynamically
      controls: new FormArray([]),
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
  get controls() {
    return (this.signupForm.get('controls') as FormArray).controls;
  }
  onAddControls() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('controls') as FormArray).push(control);
  }
  // costume validator
  notAllowedValidator = (control: FormControl): { [s: string]: boolean } => {
    if (this.notAllowed.indexOf(control.value) !== -1) {
      return { nameIsNotAllowed: true };
    }
    return null;
  };
}
