import { PokojeService } from './../_core/pokoje/pokoje.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RezerwacjeService } from './../_core/rezerwacje/rezerwacje.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tokenNotExpired } from 'angular2-jwt';
import { UserService } from './../_core/user/user.service';
import { Component, OnInit } from '@angular/core';

export function checkDate(group: FormGroup){
  let date = group.value;
  return (date.date_start <= date.date_end) ? null /* It's good */ : {
    invalid: true
  }
}

@Component({
  selector: 'app-pokoj',
  templateUrl: './pokoj.component.html',
  styleUrls: ['./pokoj.component.css']
})
export class PokojComponent implements OnInit {

  funkcja: string = '';
  msg: string = '';
  error: string = '';
  id: number;

  formularz: boolean;
  logged: boolean;
  loading: boolean = false;
  form: FormGroup;
  dane: any = {};

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private user: UserService, private rezerw: RezerwacjeService, private router: Router, private pokoj: PokojeService) {
    this.id = this.route.snapshot.params['id'];

    this.form = this.fb.group({
      dates: this.fb.group(
        { date_start: ['', [Validators.required]],
          date_end: ['', [Validators.required]]},),
    });

    this.logged = tokenNotExpired();
    this.user.logged$.subscribe(
      (value: boolean) => {
        this.funkcja = this.user.getPayload().funkcja;
        if(this.funkcja == 'klient') this.formularz = true;
      }
    )

    this.form.valueChanges.subscribe(
      data => {
        if(this.form.valid) {
          let formValue = Object.assign({id_pokoju: this.id}, this.form.value.dates);
          this.loading = true;
          this.rezerw.sprawdz(formValue).subscribe(
              res => {
                if('message' in res) {
                  this.error = res['message'];
                  this.msg = null;
                  this.loading = false;
                }
                else {
                  this.error = null;
                  this.loading = false;
                }
              },
              error => {
                console.log(error);
                this.loading = false;
                this.form.reset();
            });
          }
      });
  }

  ngOnInit() {
    if(this.logged) {
      this.funkcja = this.user.getPayload().funkcja;
      if(this.funkcja == 'klient') this.formularz = true;
    }

    this.formularz = true;
    this.pokoj.getbyID(this.id).subscribe(
      res => this.dane = res
    )
  }

  registerEvent(){
    if(this.form.valid) {
      let formValue = Object.assign({id_pokoju: this.id}, this.form.value.dates);
      this.loading = true;
      this.rezerw.zarezerwuj(formValue).subscribe(
          res => {
            if('message' in res) {
              this.error = res['message'];
              this.msg = null;
              this.loading = false;
              this.form.reset();
            }
            else {
              this.msg = res['result'];
              this.error = null;
              this.loading = false;
              this.formularz = false;
              this.form.reset();
            }
          },
          error => {
            console.log(error);
            this.loading = false;
            this.form.reset();
          });
      }
  }

  moveLogin(){
    if(tokenNotExpired()){ this.user.logout(); }
    this.router.navigate(['/auth/login']);
  }
}
