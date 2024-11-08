import { LoginService } from './components/login/login_service.js';
import { UserMongo } from './components/users/user_model.js';
import { UserService } from './components/users/user_service.js';
import { EstateService } from './components/estates/estate_service.js';
import { EstateMongo } from './components/estates/estate_model.js';
import { TenantService } from './components/tenants/tenant_service.js';
import { TenantMongo } from './components/tenants/tenant_model.js';
import { conf } from './conf.js';
import { Dependency } from './libs/dependency.js';

export function configureDependencies() {
  Dependency.add('conf', conf);
  Dependency.add('userService', () => new UserService());
  Dependency.add('userData', () => new UserMongo());
  Dependency.add('loginService', () => new LoginService());
  Dependency.add('estateService', () => new EstateService());
  Dependency.add('estateData', () => new EstateMongo());
  Dependency.add('tenantService', () => new TenantService());
  Dependency.add('tenantData', () => new TenantMongo());
}
