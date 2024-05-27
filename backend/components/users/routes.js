import { UserController } from './user_controller.js';

export function configureUserRoutes(router) {
  router.get('/user', (req,res) => (new UserController).get(req,res));
  router.post('/user', (req,res) => (new UserController).post(req,res));
}