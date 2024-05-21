import { UserController } from './user_controller.js';

export function configureUserRoutes(router) {
  router.get('/user', UserController.get);
}