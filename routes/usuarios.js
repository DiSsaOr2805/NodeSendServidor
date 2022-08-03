const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const { check } = require('express-validator')


router.post('/',
    [
        check('nombre', 'El Nombre es Obligatorio').not().isEmpty(),
        check('email', 'Agrega un Email Valido').isEmail(),
        check('password', 'El Password debe ser de al menos 6 Caracteres').isLength({min: 6}),
    ],
    usuarioController.nuevoUsuario

)

module.exports = router