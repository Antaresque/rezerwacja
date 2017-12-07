import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokojComponent } from './pokoj/pokoj.component';
import { PracComponent } from './prac/prac.component';
import { SzefComponent } from './szef/szef.component';
import { UserComponent } from './user/user.component';
import { PublicModule } from './_public/_public.module';

@NgModule({
  declarations: [
    AppComponent,
    PublicModule,
    HomeComponent,
    PokojComponent,
    PracComponent,
    SzefComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
