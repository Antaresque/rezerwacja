import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_core/user/user.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

export function comparePassword(group: FormGroup) {
  let passgroup = group.value;
  return (passgroup.pass === passgroup.pass2) ? null /* It's good */ : {
    invalid: true
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private user: UserService, private router: Router) { }

  loading = false;
  model: any = {};

  ngOnInit() {
    this.form = this.fb.group({
      login: ['', [Validators.required]],
      passGroup: this.fb.group(
        { pass: ['', [Validators.required]],
          pass2: ['', [Validators.required]]},
        {validator: comparePassword}),
      email: ['', Validators.compose([Validators.required, Validators.email])],
      imie: ['', Validators.required],
      nazwisko: ['', Validators.required],
      telefon: ['', Validators.compose( [Validators.required, Validators.min(111111111), Validators.max(999999999)] )]
    })
  }

  registerEvent() {
    if (this.form.valid) {
      const formValue = Object.assign({}, this.form.value);
      formValue.password = formValue.passGroup.password;
      delete formValue.passGroup;
      this.loading = true;
      this.user.insert(this.form.value).subscribe(
          data => {
            this.loading = false;
            this.form.reset();
            this.router.navigate(['/']);
          },
          error => {
            this.loading = false;
            this.form.reset();
          });
      }
    }
}
