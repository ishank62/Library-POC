import { Component, NgModule, Compiler, OnInit } from '@angular/core';
import { BaseComponent } from 'tvmaze';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'ld-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.scss']
})
export class PageoneComponent extends BaseComponent implements OnInit {

  constructor(public router: Router, private compiler: Compiler) {
    super(router);
  }

  ngOnInit(): void {
  }

  createDynamic(){
    const template = '<span>generated on the fly</span>';
    // const tmpCmp = Component({template: template})(class {});

    const routes = [{path: '', component: BaseComponent}];
    const tmpModule = NgModule({
      imports: [RouterModule.forChild(routes)],
      declarations: [BaseComponent]})(class {});
    
    this.compiler.compileModuleAsync(tmpModule).then((module) => {

      const appRoutes = [...this.router.config];

      const route = {
        path: 'dynamic',
        loadChildren() { return module }
      };
      console.log("appRoutes",appRoutes);

      appRoutes.unshift(route);

      console.log("appRoutes",appRoutes);

      this.router.resetConfig(appRoutes);
      // this.router.navigateByUrl('/dynamic');
    });
  }
}
