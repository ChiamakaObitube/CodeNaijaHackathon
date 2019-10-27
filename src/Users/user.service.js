const config = require('../../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('src/_helpers/db');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    delete: _delete
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    
    if (user && bcrypt.compareSync(password, user.password)) {
        const { password, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.email }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
       
    }
}

async function getAll() {
    return await User.find().select('-password');
}

async function getById(id) {
    return await User.findById(id).select('-password');
}

async function create(userParam) {
    // validate
    if (await User.findOne({ email: userParam.email })) {
        throw 'Email "'  + userParam.email + '" is already taken';
    }

    const user = new User(userParam);

    // password password
    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }
    console.log(userParam.email);

    // save user
    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}