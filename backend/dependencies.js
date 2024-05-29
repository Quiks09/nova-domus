import { UserMockup } from './components/users/user_mockup.js';
import { UserService } from './components/users/user_service.js';
import { Dependency } from './libs/dependency.js';

export function configureDependencies(){
    Dependency.add('userService', ()=> new UserService); //<-- EN JS LAS CLASES SON FUNCIONES!!!
    Dependency.add('userData', ()=> new UserMockup);
}