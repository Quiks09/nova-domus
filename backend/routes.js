import { configureUserRoutes } from './components/users/routes.js';
import { configureLoginRoutes } from './components/login/routes.js';
import { configureEstateRoutes } from './components/estates/routes.js';
import { configureTenantRoutes } from './components/tenants/routes.js';

export function configureRoutes(router) {
  configureUserRoutes(router);
  configureLoginRoutes(router);
  configureEstateRoutes(router);
  configureTenantRoutes(router); // Añadir las rutas de tenants
}
