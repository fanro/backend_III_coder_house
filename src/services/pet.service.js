import { petsModel } from '../models/pet.model.js';

export class PetService {
  static async getPets() {
    return await petsModel.find().lean();
  }

  static async insertManyPets(pets) {
    return await petsModel.insertMany(pets);
  }
}
