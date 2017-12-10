import { PracGuard } from './guards/prac.guard';
import { UserService } from './user/user.service';
import { PokojeService } from './pokoje/pokoje.service';
import { PracownicyService } from './pracownicy/pracownicy.service';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { SzefGuard } from './guards/szef.guard';
import { KlientGuard } from './guards/klient.guard';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({globalHeaders: [{'Content-Type':'application/json'}],}), http, options);
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: CoreModule,
        providers: [PracownicyService,
                    PokojeService,
                    HttpModule,
                    UserService,
                    PracGuard,
                    SzefGuard,
                    KlientGuard,
                    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http, RequestOptions]}
                  ]
    };
  }

}
