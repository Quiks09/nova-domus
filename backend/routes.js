import { installUserRoutes } from './components/users/routes.js';

export function installRoutes(router) {
  installUserRoutes(router);
}