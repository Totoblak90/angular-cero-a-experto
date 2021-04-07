const { check } = require("express-validator");
const { response, request } = require('express');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')

module.exports = {
    name: check('name', 'El nombre es obligatorio')
    .not()
    .isEmpty(),
    email: check('email')
            .isEmail()
                .withMessage('El formato es incorrecto'),

    password: check('password')
                .isLength({min: 6})
                    .withMessage('La contraseña debe tener al menos 6 caracteres'),
    validation: (req = request, res = response, next) => {

        const errors = validationResult ( req )

        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            });
        }

        next()
    },
    validateJWT: (req = request, res = response, next) => {

        const token = req.header('x-token');

        if (!token) {
            return res.status(400).json({
                ok: false,
                errors: 'Token inválido'
            });
        }

        try {
            
            const {uid, name} = jwt.verify( token, process.env.SECRET_JWT_SEED)
            req.uid = uid;
            req.name = name;

        } catch (error) {

            console.log(error);
            return res.status(400).json({
                ok: false,
                errors: 'Token inválido'
            });

        }

        next()
    }
}
