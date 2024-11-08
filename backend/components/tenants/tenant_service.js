import { ConflictError } from '../../libs/conflict_error.js';
import { Dependency } from '../../libs/dependency.js';
import { MissingParameterError } from '../../libs/missing_parameter_error.js';
import * as uuid from 'uuid';

export class TenantService {
  constructor() {
    this.tenantData = Dependency.get('tenantData');
  }

  async getList(filters) {
    filters = { ...filters, deletedAt: null };
    return this.tenantData.getList(filters);
  }

  async getForUuidOrNull(uuid) {
    const tenantList = await this.tenantData.getList({ uuid });
    return tenantList.length ? tenantList[0] : null;
  }

  async create(data) {
    if (!data?.name) throw new MissingParameterError('name');
    if (!data.contacto) throw new MissingParameterError('contacto');

    if (await this.getForUuidOrNull(data.uuid)) {
      throw new ConflictError('El inquilino ya existe.');
    }

    const now = new Date();
    data.createdAt = now;
    data.updatedAt = now;
    data.uuid = uuid.v4();

    return this.tenantData.create(data);
  }

  async updateForUuid(uuid, data) {
    data = { ...data, updatedAt: new Date() };
    return this.tenantData.update({ uuid }, data);
  }

  async deleteForUuid(uuid) {
    return this.tenantData.update({ uuid }, { deletedAt: new Date() });
  }
}
