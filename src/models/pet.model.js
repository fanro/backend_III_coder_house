import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const petSchema = new mongoose.Schema({
  name: String,
  species: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

petSchema.plugin(paginate);
export const petsModel = mongoose.model('pets', petSchema);
