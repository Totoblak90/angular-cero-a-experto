const { response, request } = require('express');
const Usuario = require('../db/models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt')

module.exports = {

    createUser: async (req = request, res = response) => {
        
        const { name, email, password } = req.body

        try {

            // Verificar el email
            const usuario = await Usuario.findOne({ email });

            if (usuario) {
                return res.status(400).json({
                    ok: false,
                    msg: "El email ingresado ya se encuentra registrado."
                })
            }

            // Crear usuario con el modelo de la BD

            const dbUsuario =  new Usuario( req.body )

            // Hashear la contraseña

            const salt = bcrypt.genSaltSync(12);
            dbUsuario.password = bcrypt.hashSync( password, salt );

            // Generar el JWT

            const token = await generarJWT( dbUsuario.id, dbUsuario.name )

            // Crear usuario de base de datos

            await dbUsuario.save()

            // Generar respuesta exitosa

            return res.status(201).json({
                ok: true,
                uid: dbUsuario.id,
                name,
                token
            });

        } catch (err){
            console.log(err);
            return res.status(500).json({
                ok: false,
                msg: "Por favor contactarse con el administrador"
            })

        }


    },
    loginUser: async (req = request, res = response) => {

        const { email, password } = req.body

        try {

            // Buscar el usuario en la base de datos
            const dbUsuario = await Usuario.findOne({ email });

            // Chequear si ese mail existe en la base de datos
            if ( !dbUsuario ) {
                return res.status(400).json({
                    ok: false,
                    msg: "El email ingresado no se encuentra registrado."
                })
            } 

            // Confirmar si las contraseñas coinciden

            const passwordsMatch = bcrypt.compareSync( password, dbUsuario.password )

            if (!passwordsMatch) {
                return res.status(400).json({
                    ok: false,
                    msg: "La constraseña es incorrecta."
                })
            }

            // Generar el JWT

            const token = await generarJWT( dbUsuario.id, dbUsuario.name )

            // Respuesta exitosa

            return res.status(201).json({
                ok: true,
                uid: dbUsuario.id,
                name: dbUsuario.name,
                token
            });

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: "Pongase en contacto con el administrador del sistema"
            })
        }



    },
    tokenValidation: async (req = request, res = response) => {



        const {uid, name} = req
        const token = await generarJWT( uid, name )

        return res.json({
            ok: true,
            uid,
            name,
            token
        })

    }
}