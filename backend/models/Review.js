import mongoose from 'mongoose';

const ReviewSchema = mongoose.Schema({
    star: Number,
    slug: String,
    title: String,
    content: String,
    incognito: Boolean,
    isDeleted: Boolean,
    likes: [String],
    dislikes: [String],
    createdBy: String,
    createdAt: Date,
    updatedBy: String,
    updatedAt: Date,
})


export default mongoose.models['reviews'] || mongoose.model('reviews', ReviewSchema);