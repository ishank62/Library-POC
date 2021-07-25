import { Component, NgModule, Compiler, OnInit } from '@angular/core';
import { BaseComponent } from 'tvmaze';
import { RouterModule, Router } from '@angular/router';
import { RouteLoaderService } from '../services/route-loader.service'

@Component({
  selector: 'ld-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.scss']
})
export class PageoneComponent extends BaseComponent implements OnInit {

  constructor(public router: Router, private compiler: Compiler, public routeService: RouteLoaderService) {
    super(router);
  }

  ngOnInit(): void {
  }

  createDynamic(){
    // const template = '<span>generated on the fly</span>';
    // const tmpCmp = Component({template: template})(class {});

    // ------Code for adding module dynamically-----------------
    // const routes = [{path: '', component: BaseComponent}];
    // const tmpModule = NgModule({
    //   imports: [RouterModule.forChild(routes)],
    //   declarations: [BaseComponent]})(class {});
    
    // this.compiler.compileModuleAsync(tmpModule).then((module) => {


    //   const route = {
    //     path: 'dynamic',
    //     loadChildren() { return module }
    //   };
      // this.router.navigateByUrl('/dynamic');
    // });
    // --------------------------------------------------------

      const route = {
        path: 'dynamic',
        component: BaseComponent
      };

      this.routeService.createRoutes(route);
  }
}
