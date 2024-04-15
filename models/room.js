import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    maxUsers: {
        type: Number,
        default: 15,
        validate: {
            validator: (value) => value > 0,
            message: 'maxUsers must be a positive integer'
        }
    },
    isPrivate: {
        type: Boolean,
        default: false 
    },
    maxAdmins: {
        type: Number,
        default: 3,
        validate: {
            validator: (value) => value > 0,
            message: 'maxAdmins must be a positive integer'
        }
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    admins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Room = mongoose.model('Room', roomSchema);

export default Room;