import { CapitalizePipe } from './capitalize-pipe';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './time-ago-pipe';
import { TruncatePipe } from './truncate-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [TimeAgoPipe, TruncatePipe, CapitalizePipe],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TimeAgoPipe,
    TruncatePipe,
    CapitalizePipe
  ]
})
export class SharedModule { }
