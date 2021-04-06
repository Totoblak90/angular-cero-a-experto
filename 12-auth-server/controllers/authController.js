const { response, request } = require('express');

module.exports = {

    createUser: (req = request, res = response) => {
        
        const { name, email, password } = req.body

        console.log( name, email, password )

        return res.json({
            ok: true,
            msg: "Crear usuario /new"
        })

    },
    loginUser: (req = request, res = response) => {

        const { email, password } = req.body

        console.log( email, password )

        return res.json({
            ok: true,
            msg: "Login de usuario"
        })

    },
    tokenValidation: (req = request, res = response) => {

        console.log(req.body);

        return res.json({
            ok: true,
            msg: "Crear usuario /renew"
        })

    }
}