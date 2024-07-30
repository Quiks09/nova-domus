import { LoginService } from './components/login/login_service.js';
import { UserMongo } from './components/users/user_model.js';
import { UserService } from './components/users/user_service.js';
import { conf } from './conf.js';
import { Dependency } from './libs/dependency.js';

export function configureDependencies(){
  Dependency.add('conf', conf);
  Dependency.add('userService', ()=> new UserService); //<-- EN JS LAS CLASES SON FUNCIONES!!!
  Dependency.add('userData', ()=> new UserMongo);
  Dependency.add('loginService', ()=> new LoginService);
}