import { UserService } from './user/user.service';
import { PokojeService } from './pokoje/pokoje.service';
import { PracownicyService } from './pracownicy/pracownicy.service';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

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
        providers: [PracownicyService, PokojeService, HttpModule, UserService]
    };
  }

}
