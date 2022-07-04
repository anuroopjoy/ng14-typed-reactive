import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { PersonalForm } from './form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  name = new FormControl<string | null>(null);
  personalForm = new FormGroup<PersonalForm>({
    name: new FormControl('', { nonNullable: true }),
    age: new FormControl(0),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
    hobbies: new FormArray<FormControl<string | null>>([]),
  });
  // personalForm!: FormGroup;
  get hobbies() {
    return this.personalForm.get('hobbies') as FormArray<
      FormControl<string | null>
    >;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.name.setValue('tests');
    // this.personalForm = this.fb.nonNullable.group({
    //   name: ['', Validators.required],
    //   age: new FormControl('', [Validators.max(100), Validators.min(0)]),
    //   email: ['', [Validators.required, Validators.email]],
    //   address: this.fb.nonNullable.group({
    //     street: '',
    //     city: [''],
    //     state: '',
    //     zip: '',
    //   }),
    //   hobbies: this.fb.array([]),
    // });
  }

  setValue() {
    this.personalForm.setValue({
      name: 'new value',
      age: 10,
      email: 'test@xyz.com',
      address: {
        street: 'fdfdsfs',
        city: 'tvm',
        state: 'kerala',
        zip: '234434',
      },
      hobbies: this.hobbies.value,
    });
    this.personalForm.get('email')?.disable();
    // this.personalForm.removeControl('email');
  }
  patchValue() {
    this.personalForm.patchValue({
      name: 'patched value',
      address: {
        city: 'ktm',
      },
    });
  }

  resetForm() {
    this.personalForm.reset();
  }

  addHobby() {
    this.hobbies.push(new FormControl(''));
  }
}
