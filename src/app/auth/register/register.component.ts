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
  error: string;
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
    if(this.form.valid) {
      const formValue = Object.assign({}, this.form.value);
      formValue.pass = formValue.passGroup.pass;
      delete formValue.passGroup;
      this.loading = true;
      this.user.register(formValue).subscribe(
          res => {
            if('message' in res) {
              this.error = res['message'];
              this.form.reset();
              this.loading = false;
            }
            else {
              this.model = {};
              this.error = null;
              this.loading = false;
              this.form.reset();
              this.router.navigate(['/auth/login'], {queryParams: {'redirect': false, 'register': true} });
            }
          },
          error => {
            console.log(error);
            this.loading = false;
            this.form.reset();
          });
      }
    }
}
