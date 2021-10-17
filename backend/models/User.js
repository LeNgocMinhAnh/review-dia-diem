import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    fullName: String,
    displayName: String,
    email: String,
    displayImage: String,
    phoneNumber: String,
    uid: String,
    roles: {
        type: [String],
        default: ['user']
    },
    createdBy: String,
    createdAt: Date,
    updatedBy: String,
    updatedAt: Date,
})


export default mongoose.models['users'] || mongoose.model('users', UserSchema);