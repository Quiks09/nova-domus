import { Dependency } from '../../libs/dependency.js';
import { MissingParameterError } from '../../libs/missing_parameter_error.js';
import jwt from "jsonwebtoken";

export class LoginService {
  constructor() {
    this.userService = Dependency.get('userService');
  }

  async login(data) {
    if (!data?.username) {
      throw new MissingParameterError('username');
    }
    if (!data.password) {
      throw new MissingParameterError('password');
    }

    const user = await this.userService.getForUsernameOrNull(data.username);
    if(!user) {
      throw new Error (`No existe el usuario ${data.username}`)
    }

    if (!(await this.userService.checkPassword(data.password, user.hashedPassword))) {
      throw new Error ('Contraseña incorrecta');
    }
 
    const keyJWt = 'contrasenaJWT';
        const payload ={
            username: data.username,
            displayName: user.displayName,
            useruuid: user.uuid
        }
    
    const token = jwt.sign(payload, keyJWt);

    return {
      authorizationToken: token
    };
  }
}


