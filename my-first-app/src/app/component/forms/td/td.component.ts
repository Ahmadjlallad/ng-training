import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.scss'],
})
export class TdComponent implements OnInit {
  @ViewChild('f') regenerationForm: NgForm;
  username = '';
  defQus = 'pet';
  genders = ['Male', 'Female'];
  onChange(e: any) {
    console.log(e);
    console.log('name ', this.username);
  }
  answer: string = '';
  constructor() {}
  onSubmit(f: NgForm) {
    console.log(f);
  }
  ngOnInit(): void {}
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.regenerationForm.form.patchValue({
      userData: { username: suggestedName },
    });
  }
  resetTheForm() {
    this.regenerationForm.reset();
  }
}
