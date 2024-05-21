import { Dependency } from '../../libs/dependency.js';

export class UserController {
  static get(req, res) {
    const UserService = Dependency.get('UserService');
    res.send(UserService.get());
    
  }

static post(req, res){
  const UserService = Dependency.get('UserService');
  UserService.add(req.body);
  res.status(204).send();
}

}


