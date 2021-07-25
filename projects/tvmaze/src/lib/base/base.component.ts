import { Component, ContentChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZippyContentDirective } from '../zippy-content.directive';

@Component({
  selector: 'tm-base',
  templateUrl:'./base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  baseItems: Array<any> = []
  expanded: boolean = true;
  dynamic = false;
  // apiName: string;
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;

  constructor(public router: Router) { }
  
  ngOnInit() {
    // console.log("Asas",this.content);
      // this.apiService[apiName].subscribe(res=>{
      //     this.baseItems = res.data
      // })
      if(this.router.url === '/dynamic')
        this.dynamic = true;
  }

  openPage(routename: string) {
    this.router.navigateByUrl(`/${routename}`);
  }
}
