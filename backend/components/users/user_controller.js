import { Dependency } from '../../libs/dependency.js';

export class UserController {
  constructor(){
    this.userService = Dependency.get('userService');
    
  }

  get(req, res) {
    const userList = this.userService.getList();
    res.send(userList);
  }

  async post(req,res){
    await this.userService.create(req.body);
    res.status(204).end();
  }
}


