const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true, unique: false },
    lastName: { type: String, required: true, unique: false },
    password: { type: String, required: true, unique: false },
    occupation: { type: String, required: false, unique: false, default: "" },
    location: { type: String, required: false, unique: false, default: "" },
    phone: { type: String, required: false, unique: true, default: "" },
    skills: { type: [String], required: false, unique: false },
    interests: { type: [String], required: false, unique: false },
    galleryImages: { type: [String], required: false, unique: false },
    profilePicture: { type: String, required: false, unique: false, default: "" },
    requests: { type: [String], required: false, unique: false },
    matches: { type: [String], required: false, unique: false }
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

module.exports = mongoose.model('User', userSchema);