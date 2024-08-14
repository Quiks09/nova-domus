import { Dependency } from '../../libs/dependency.js';
import { ForbiddenError } from '../../libs/forbidden_error.js';

export class UserController {
  constructor(){
    this.userService = Dependency.get('userService');
    
  }

  async get(req, res) {





    const userList = await this.userService.getList();
    res.send(userList);
  }

  async post(req,res){
    await this.userService.create(req.body);
    res.status(204).end();
  }
}


