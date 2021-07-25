import { HttpClient } from '@angular/common/http';
import { RouteLoaderService } from '../services/route-loader.service';

export function ensureRoutesExist(
    http: HttpClient,
    routeLoader: RouteLoaderService) {
  return () => routeLoader.createRoutes();
}