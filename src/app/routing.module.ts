import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
  import { RegisterComponent } from './auth/register/register.component';
  import { LoginComponent } from './auth/login/login.component';
import { PokojComponent } from './pokoj/pokoj.component';
import { KlientGuard } from './_core/guards/klient.guard';
import { PracGuard } from './_core/guards/prac.guard';
import { SzefGuard } from './_core/guards/szef.guard';
import { PracComponent } from './prac/prac.component';
import { UserComponent } from './user/user.component';
import { SzefComponent } from './szef/szef.component';
import { PageNotFoundComponent } from './_public/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent, children: [
    { path: '', redirectTo: 'login',  pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]},
  { path: 'pokoj/:id', component: PokojComponent },
  { path: 'klient', component: UserComponent, canActivate: [KlientGuard] },
  { path: 'pracownik', component: PracComponent, canActivate: [PracGuard] },
  { path: 'szef', component: SzefComponent, canActivate: [SzefGuard] },
  { path: '**', component: PageNotFoundComponent } // 404
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
