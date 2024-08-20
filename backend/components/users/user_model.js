import mongoose, { Schema } from 'mongoose';

export const UserModel = mongoose.model(
  'User',
  new Schema({
    uuid: String,
    username: String,
    displayName: String,
    hashedPassword: String,
    isEnabled: Boolean,
    roles: String,
    avatar: String, // Agrega el campo avatar aquí
  })
);

export class UserMongo {
  async getList(filters, /*options*/) {
    return (await UserModel.find(filters).exec())
      .map(i => i.toJSON());
  }
  
  async create(data){
    await UserModel.create({
      uuid: `${data.uuid}`,
      username: `${data.username}`,
      displayName: `${data.displayName}`,
      hashedPassword: `${data.hashedPassword}`,
      avatar: `${data.avatar}`, // Asegúrate de incluir el avatar cuando crees un usuario
    }).then(() => {
      console.log('Usuario creado exitosamente');
    }).catch((error) => {
      console.error('Error al crear el usuario', error);
    });
  }
};
