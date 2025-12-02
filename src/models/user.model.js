import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const schemaUser = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: {
      type: String,
      required: true,
    },
    password: String,
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

schemaUser.plugin(paginate);
export const usersModel = mongoose.model('users', schemaUser);
