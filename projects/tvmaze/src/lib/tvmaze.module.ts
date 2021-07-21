import { NgModule } from '@angular/core';
import { TvmazeComponent } from './tvmaze.component';
import { PosterComponent } from './poster/poster.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BaseComponent } from './base/base.component';
import { ZippyContentDirective } from './zippy-content.directive';


@NgModule({
  declarations: [
    TvmazeComponent,
    PosterComponent,
    BaseComponent,
    ZippyContentDirective
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    TvmazeComponent,
    PosterComponent,
    BaseComponent
  ]
})
export class TvmazeModule { }
