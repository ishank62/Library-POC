import { Component, ContentChild, OnInit } from '@angular/core';
import { BaseComponent } from 'tvmaze';
import { Router } from '@angular/router';

@Component({
  selector: 'ld-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.scss']
})
export class PageoneComponent extends BaseComponent implements OnInit {

  constructor(public router: Router) {
    super(router);
  }

  ngOnInit(): void {
  }

}
