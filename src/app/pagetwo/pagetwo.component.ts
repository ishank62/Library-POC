import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'tvmaze';
import { Router } from '@angular/router';

@Component({
  selector: 'ld-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.scss']
})
export class PagetwoComponent extends BaseComponent implements OnInit {

  constructor(public router: Router) {
    super(router);
  }

  ngOnInit(): void {
  }

}
