const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    create,
    login,
    checkToken
}

async function create(req, res){
    try{
        const user = await User.create(req.body)
        const token = createJWT(user);
        res.json(token)
    }catch(err){
        res.status(400).json(err)
    }
}

async function login(req, res){
    try{
        const user = await User.findOne({email: req.body.email})
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                const token = createJWT(user);
                res.json(token)
            }else{
                throw new Error("Invalid credentials")
            }
        }else{
            throw new Error("Invalid credentials")
        }
    }catch(err){
        res.status(400).json(err)
    }
}

async function checkToken(req, res){
    res.json(req.exp)
}

function createJWT(user) {
    return jwt.sign(
        {user },
        process.env.SECRET,
        { expiresIn: '24h'}
    )
}