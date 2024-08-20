import { configureUserRoutes } from './components/users/routes.js';
import { configureLoginRoutes } from './components/login/routes.js';
import { configureEstateRoutes } from './components/estates/routes.js';

export function configureRoutes(router) {
  configureUserRoutes(router);
  configureLoginRoutes(router);
  configureEstateRoutes(router);
}