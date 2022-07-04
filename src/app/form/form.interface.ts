import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface PersonalForm {
  name: FormControl<string>;
  age: FormControl<number | null>;
  email?: FormControl<string | null>;
  address: FormGroup<Address>;
  hobbies: FormArray<FormControl<string | null>>;
}

interface Address {
  street: FormControl<string | null>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  zip: FormControl<string | null>;
}
