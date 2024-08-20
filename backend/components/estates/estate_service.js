import { ConflictError } from '../../libs/conflict_error.js';
import { Dependency } from '../../libs/dependency.js';
import { MissingParameterError } from '../../libs/missing_parameter_error.js';
import * as uuid from 'uuid';

export class EstateService {
  constructor() {
    this.estateData = Dependency.get('estateData'); // Asegúrate de registrar estateData en dependency.js
  }

  async getList(filters, option) {
    return this.estateData.getList(filters, option);
  }

  async getForUuidOrNull(uuid) {
    const estateList = await this.estateData.getList({ uuid });
    if (estateList.length) {
      return estateList[0];
    }
    return null;
  }

  async create(data) {
    if (!data?.estate_type) {
      throw new MissingParameterError('estate_type');
    }

    if (!data.address) {
      throw new MissingParameterError('address');
    }

    if (!data.city) {
      throw new MissingParameterError('city');
    }

    if (!data.price) {
      throw new MissingParameterError('price');
    }

    // Verifica si ya existe un inmueble con la misma dirección
    const existingEstate = await this.estateData.getList({ address: data.address });
    if (existingEstate.length) {
      throw new ConflictError('Ya existe un inmueble con esta dirección.');
    }

    // Asigna un UUID único al inmueble
    data.uuid = uuid.v4();

    // Crea el nuevo inmueble en la base de datos
    await this.estateData.create(data);
  }
}
