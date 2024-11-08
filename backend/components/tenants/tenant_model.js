import mongoose, { Schema } from 'mongoose';

export const TenantModel = mongoose.model(
  'Tenant',
  new Schema({
    uuid: String,
    name: String,
    contacto: String,
    inicioContrato: Date,
    finContrato: Date,
    precio: Number,
    isEnabled: Boolean,
    deletedAt: Date,
    createdAt: Date,
    updatedAt: Date,
  })
);

export class TenantMongo {
  async getList(filters) {
    return (await TenantModel.find(filters).exec()).map(i => i.toJSON());
  }

  async create(data) {
    return TenantModel.create(data);
  }

  async update(filter, data) {
    return TenantModel.updateMany(filter, data);
  }
}
