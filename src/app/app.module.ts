import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl);

import { AppComponent } from './app.component';

// modules
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './_core/_core.module';
import { PublicModule } from './_public/_public.module';
import { HomeModule } from './home/home.module';
import { PracModule } from './prac/prac.module';
import { SzefModule } from './szef/szef.module';
import { UserModule } from './user/user.module';
import { PokojModule } from './pokoj/pokoj.module';

// routing module
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    CoreModule.forRoot(),
    HomeModule,
    PokojModule,
    PracModule,
    SzefModule,
    UserModule,
    PublicModule,
    RoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
