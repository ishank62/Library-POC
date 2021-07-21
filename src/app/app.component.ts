import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, TvmazeService } from 'tvmaze';

@Component({
  selector: 'ld-root',
  template: `
    <tm-poster [showId]="335"></tm-poster>
    
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  show$: Observable<Show>;
  title = 'lib-demo';

  constructor(private tvmaze: TvmazeService) {
    this.show$ = this.tvmaze.getShow(336);
  }
}