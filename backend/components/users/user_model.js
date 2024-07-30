import mongoose, { Schema } from 'mongoose';

export const UserModel = mongoose.model(
  'User',
  new Schema({
    uuid: String ,
    username: String,
    displayName: String,
    hashedPassword: String,
  })
);

export class UserMongo{
  async getList(filters, /*options*/) {
    return UserModel.find(filters).exec();
  }
};

/*crear metodo Create para users para LUNES !!!

Constructing Documents
An instance of a model is called a document. Creating them and saving to the database is easy.

const Tank = mongoose.model('Tank', yourSchema);

const small = new Tank({ size: 'small' });
await small.save();

// or

await Tank.create({ size: 'small' });

// or, for inserting large batches of documents
await Tank.insertMany([{ size: 'small' }]);
Note that no tanks will be created/removed until the connection your model uses is open. Every model has an associated connection. When you use mongoose.model(), your model will use the default mongoose connection.

await mongoose.connect('mongodb://127.0.0.1/gettingstarted');
If you create a custom connection, use that connection's model() function instead.

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
const Tank = connection.model('Tank', yourSchema);

*/