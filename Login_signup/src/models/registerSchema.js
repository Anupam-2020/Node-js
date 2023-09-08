const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    confirmPassword: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

employeeSchema.pre("save", async function(next) {
    if(this.isModified("password")) {
        // console.log(`'password before encrypting', ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        // console.log(`'password after encrypting', ${this.password}`);

        this.confirmPassword = ''
    }
    next();
})

module.exports = mongoose.model('Register', employeeSchema);