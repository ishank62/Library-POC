import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'tvmaze';
import { Router } from '@angular/router';

@Component({
  selector: 'ld-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.scss']
})
export class PagethreeComponent extends BaseComponent implements OnInit {

  constructor(public router: Router) {
    super(router);
  }

  ngOnInit(): void {
  }

}
