import mongoose, { Schema } from 'mongoose';

export const EstateModel = mongoose.model(
  'Estate',
  new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    estate_type: { type: String, required: true }, // Ej: "Apartment"
    address: { type: String, required: true }, // Ej: "123 Main St, Apt 45"
    city: { type: String, required: true }, // Ej: "Miami"
    price: { type: Number, required: true }, // Ej: 750000
    currency: { type: String, required: true }, // Ej: "USD"
    area: { type: Number, required: true }, // Ej: 120 (en metros cuadrados)
    rooms: { type: Number, required: true }, // Ej: 3
    bathrooms: { type: Number, required: true }, // Ej: 2
    description: { type: String, required: true }, // Ej: "A spacious apartment in the heart of the city."
    publication_date: { type: Date, default: Date.now }, // Fecha de publicación
    status: { type: String, required: true }, // Ej: "active"
    photos: [{ type: Object }], // Array de objetos para almacenar información de fotos
  })
);

export class EstateMongo {
  async getList(filters /*options*/) {
    return (await EstateModel.find(filters)
      .populate('user_id', 'avatar') // Trae solo el username y avatar del usuario
      .exec())
      .map(i => i.toJSON());
  }

  async create(data) {
    await EstateModel.create({
      user_id: data.user_id,
      estate_type: data.estate_type,
      address: data.address,
      city: data.city,
      price: data.price,
      currency: data.currency,
      area: data.area,
      rooms: data.rooms,
      bathrooms: data.bathrooms,
      description: data.description,
      publication_date: data.publication_date,
      status: data.status,
      photos: data.photos,
    }).then(() => {
      console.log('Inmueble creado exitosamente');
    }).catch((error) => {
      console.error('Error al crear el inmueble', error);
    });
  }
}
