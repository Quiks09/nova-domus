import { UserController } from './login_controller.js';

export function configureUserRoutes(router) {
  router.get('/user', (req,res) => (new UserController).get(req,res));
  router.post(
    '/user', 
    (req,res,next) => {
      (new UserController).post(req,res)
        .catch(next);
    }
  );
}