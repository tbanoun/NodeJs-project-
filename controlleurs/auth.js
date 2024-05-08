const bcrypt = require('bcrypt')
const { response } = require('../app')
const jwt = require('jsonwebtoken')

function compare_password(hash, password) {
    return bcrypt.compare(password, hash);
}

exports.login = (req, res) => {
    if (req.body.username && req.body.password){
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
            compare_password(hash, 'Admin')
            .then(valid=> {
                if (!valid){
                    return res.status(400).json({message:'Login failed!'})
                }
                token = jwt.sign(
                    {user_id: req.body.password},
                    'Hello_world',
                    {expiresIn: 24}
                )
                return res.status(200).json({message:'Login success!', token: token})
        })
            .catch(err => console.log(err))
        })
        .catch(err => res.end(err) )
    } else {
        return res.status(400).json({message:'Login failed!'})
    }
}


exports.register = (req, res) => {
    console.log(req.file);
    return res.status(201).json({message:'user created success!'})
}