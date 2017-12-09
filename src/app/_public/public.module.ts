import { NgModule } from '@angular/core';
import { SharedModule } from './../_shared/shared.module';

// components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  imports: [SharedModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class PublicModule { }
