import { Dependency } from '../../libs/dependency.js';
import { InvalidCredentialsError } from '../../libs/invalidCredentialsError.js';
import { MissingParameterError } from '../../libs/missing_parameter_error.js';
import jwt from 'jsonwebtoken';

export class LoginService {
  constructor() {
    this.userService = Dependency.get('userService');
    this.conf = Dependency.get('conf');
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
      throw new Error (`No existe el usuario ${data.username}`);
    }

    if (!user.isEnabled) {
      throw new InvalidCredentialsError(`El usuario: ${data.username} no tiene acceso`);
    }

    if (!(await this.userService.checkPassword(data.password, user.hashedPassword))) {
      throw new InvalidCredentialsError ('Contraseña incorrecta');
    }
 
    const payload ={
      username: data.username,
      displayName: user.displayName,
      useruuid: user.uuid
    };
    
    const token = jwt.sign(payload, this.conf.jwtPassword);

    return {
      authorizationToken: token,
      roles: user.roles?.split(',').map(role => role.trim()) ?? [],
    };
  }
}


