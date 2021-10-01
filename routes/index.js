const express = require('express');
const router = express.Router();

const items = [
    {id: 1, name: 'producto'},
    {id: 2, name: 'producto2'},
    {id: 3, name: 'producto3'},
]


router.get('/', (req, res) => {
    res.render('login' , {
        title: 'Login Servidor express'
    })
})

router.get('/inicio', (req, res, next) => {
    res.render('inicio', {
        title: 'inicio',
        items: items
    })
});

router.get('/')

module.exports = router;