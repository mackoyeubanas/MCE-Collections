import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    root: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/mce-collections/image/upload/v1643033239/mce%20collections/256-512_rqmc9s.png'
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset