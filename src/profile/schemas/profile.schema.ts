import { model, Schema } from 'mongoose';
import * as uuid from 'uuid';
import { ProfileType } from '../';
import { ProfileModel } from '../models';

const ProfileSchema = new Schema<ProfileType, ProfileModel>({
  _id: {
    type: String,
    default: () => uuid.v4(),
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});



const Profile = model<ProfileType, ProfileModel>('profile', ProfileSchema);

export { Profile, ProfileSchema };