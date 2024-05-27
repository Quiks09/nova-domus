import { Dependency } from '../../libs/dependency.js';

export class UserController {
  constructor(){

  }


  static get(req, res) {
    const UserService = Dependency.get('UserService');
    res.send(UserService.get());
    
  }

  post(req,res){
    this.UserService.create(req.body);
    res.status(204);
  }

}


