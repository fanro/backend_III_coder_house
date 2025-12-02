import { usersModel } from '../models/user.model.js';

export class UserService {
  static async getUsers() {
    return await usersModel.find().lean();
  }

  static async insertManyUsers(usuarios) {
    return await usersModel.insertMany(usuarios);
  }
}
