import { UserController } from './user_controller.js';

export function installUserRoutes(router) {
  router.get('/user', UserController.get);
}