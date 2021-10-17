import mongoose from 'mongoose';

const PlaceSchema = mongoose.Schema({
    name: String,
    slug: String,
    address: String,
    description: String,
    isDeleted: Boolean,
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    createdBy: String,
    createdAt: Date,
    updatedBy: String,
    updatedAt: Date,
    type: String
})


export default mongoose.models['places'] || mongoose.model('places', PlaceSchema);