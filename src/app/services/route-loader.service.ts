import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'tvmaze';

@Injectable({
  providedIn: 'root'
})
export class RouteLoaderService {
  route = {
    path: 'dynamic',
    component: BaseComponent
  };
  
  constructor(private router: Router) { }

  public createRoutes(route?: any) {
    if(!route) route = this.route;
    
    const appRoutes = [...this.router.config];
    appRoutes.unshift(route);
    console.log("appRoutes",appRoutes);
    this.router.resetConfig(appRoutes);
  }
}
