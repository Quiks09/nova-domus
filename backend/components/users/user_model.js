import mongoose, { Schema } from 'mongoose';

export const UserModel = mongoose.model(
  'User',
  new Schema({
    uuid: String ,
    username: String,
    displayName: String,
    hashedPassword: String,
    isEnabled: Boolean,
    roles: String,
  })
);

export class UserMongo{
  async getList(filters, /*options*/) {
    return UserModel.find(filters).exec();
  }
  
  async create(data){
    await UserModel.create({
      uuid: `${data.uuid}`,
      username: `${data.username}`,
      displayName: `${data.displayName}`,
      hashedPassword: `${data.hashedPassword}`,
    }).then(() => {
      console.log('Usuario creado exitosamente');
    }).catch((error) => {
      console.error('Error al crear el usuario', error);
    });
  }

};




