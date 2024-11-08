import { Dependency } from '../../libs/dependency.js';
import { checkPermission } from '../../libs/checkPermission.js';

export class TenantController {
  constructor() {
    this.tenantService = Dependency.get('tenantService');
  }

  async get(req, res) {
    checkPermission(req, 'admin');
    const tenantList = await this.tenantService.getList(req.query);
    const result = tenantList.map(tenant => ({
      uuid: tenant.uuid,
      name: tenant.name,
      contacto: tenant.contacto,
      inicioContrato: tenant.inicioContrato,
      finContrato: tenant.finContrato,
      precio: tenant.precio,
      isEnabled: tenant.isEnabled
    }));
    res.send(result);
  }

  async post(req, res) {
    await this.tenantService.create(req.body);
    res.status(204).end();
  }

  async patch(req, res) {
    checkPermission(req, 'admin');
    await this.tenantService.updateForUuid(req.body.uuid, req.body);
    res.status(204).end();
  }

  async delete(req, res) {
    checkPermission(req, 'admin');
    await this.tenantService.deleteForUuid(req.query.uuid);
    res.status(204).end();
  }
}
