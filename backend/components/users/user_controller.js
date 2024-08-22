import { Dependency } from '../../libs/dependency.js';
import { checkPermission } from '../../libs/checkPermission.js';

export class UserController {
  constructor(){
    this.userService = Dependency.get('userService');
    
  }

  async get(req, res) {
    checkPermission(req, 'admin');

    const userList = await this.userService.getList(req.query);
    res.send(userList);
  }

  async post(req,res){
    await this.userService.create(req.body);
    res.status(204).end();
  }

  async patch(req,res){
    checkPermission(req, 'admin');

    await this.userService.updateForUuid(req.body.uuid, req.body);
    res.status(204).end();
  }
  async delete(req,res){
    checkPermission(req, 'admin');

    await this.userService.deleteForUuid(req.query.uuid);
    res.status(204).end();
  }

}


