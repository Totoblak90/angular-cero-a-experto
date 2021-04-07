const { check } = require("express-validator");
const { response, request } = require('express');
const { validationResult } = require('express-validator');

module.exports = {
    name: check('name', 'El nombre es obligatorio')
    .not()
    .isEmpty(),
    email: check('email')
            .isEmail()
                .withMessage('El formato es incorrecto')
            .isEmpty()
                .withMessage('El email es obligatorio'),

    password: check('password')
                .isLength({min: 6})
                    .withMessage('La contraseña debe tener al menos 6 caracteres')
                .isEmpty()
                    .withMessage('La contraseña es obligatoria'),
    validation: (req = request, res = response, next) => {

        const errors = validationResult ( req )

        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            });
        }

        next()
    }
}
