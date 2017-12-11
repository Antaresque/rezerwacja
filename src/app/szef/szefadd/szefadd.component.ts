import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PracownicyService } from './../../_core/pracownicy/pracownicy.service';
import { PokojeService } from './../../_core/pokoje/pokoje.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export function comparePassword(group: FormGroup) {
  let passgroup = group.value;
  return (passgroup.pass === passgroup.pass2) ? null /* It's good */ : {
    invalid: true
  }
}

@Component({
  selector: 'app-szefadd',
  templateUrl: './szefadd.component.html',
  styleUrls: ['./szefadd.component.css']
})
export class SzefaddComponent implements OnInit {

  loading = false;
  error: string;
  param: string;
  form_prac: FormGroup;
  form_pok: FormGroup;

  constructor(private route: ActivatedRoute, private pok: PokojeService, private prac: PracownicyService, private fb: FormBuilder, private router: Router) {
    this.route.queryParams.subscribe(
      params => this.param = params['param'] || 'pokoje'
    );

    this.form_prac = this.fb.group({
      login: ['', [Validators.required]],
      passGroup: this.fb.group(
        { pass: ['', [Validators.required]],
          pass2: ['', [Validators.required]]},
        {validator: comparePassword}),
      email: ['', Validators.compose([Validators.required, Validators.email])],
      imie: ['', Validators.required],
      nazwisko: ['', Validators.required],
      adres: ['', Validators.required],
      pensja: ['', Validators.required],
      telefon: ['', Validators.compose( [Validators.required, Validators.min(111111111), Validators.max(999999999)] )]
    });

    this.form_pok = this.fb.group({
      typ: ['', Validators.required],
      cena: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  registerPokoj(){
    if(this.form_pok.valid){
      this.loading = true;
      this.pok.insert(this.form_pok.value).subscribe(
        res => {
          if('message' in res){
            this.error = res['message'];
            this.loading = false;
          }
          else {
            this.error = null;
            this.loading = false;
            this.form_pok.reset();
            this.router.navigate(['/szef']);
          }
        }
      );
    }
  }

  registerPracownik(){
    if(this.form_prac.valid){
      this.loading = true;
      const formValue = Object.assign({}, this.form_prac.value);
      formValue.pass = formValue.passGroup.pass;
      delete formValue.passGroup;
      this.pok.insert(formValue).subscribe(
        res => {
          if('message' in res){
            this.error = res['message'];
            this.loading = false;
          }
          else {
            this.error = null;
            this.loading = false;
            this.form_prac.reset();
            this.router.navigate(['/szef']);
          }
        }
      );
    }
  }
}
