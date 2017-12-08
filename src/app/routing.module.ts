import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
  import { RegisterComponent } from './auth/register/register.component';
  import { LoginComponent } from './auth/login/login.component';

import { PagenotfoundComponent } from './_public/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent, children: [
    { path: '', redirectTo: 'login',  pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]},
  { path: '**', component: PagenotfoundComponent } // 404
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
