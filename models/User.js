const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    picture: String,
    biography: String,
    favorites: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Blog'
        }
    ]
}, {
    timestamps: true,
    toJSON: {
        // ret is the JSON'ed User Document
        transform: function(doc, ret) {
            // We don't want to return the password back to the client
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function(next) {
    // This will only hash the password for our newly created user
    this.password = await bcrypt.hash(this.password, saltRounds)
    return next()
})

module.exports = mongoose.model('User', userSchema)