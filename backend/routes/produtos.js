const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Produtos = require('../models/produto')

router.use(bodyParser.json())

let produtos = [
    {
        "linkImg": "https://via.placeholder.com/200",
        "name": "Prod",
        "price": "250",
        "id": 1
    },
    {
        "linkImg": "https://via.placeholder.com/200",
        "name": "Prod2",
        "price": "280",
        "id": 2
    }
]


router
    .get('/', (req, res) => {
        /*
        Usar quando implementar o MongoDB
        try{
            const produtosb = await Produtos.find();
            res.status(200).json(produtos)
        } catch(error){
            res.status(500).json({error: error})
        }
        */
        res.json(produtos)
    })

    .post('/', (req, res) => {
        produtos.push({
            linkImg: req.body.linkImg,
            name: req.body.name,
            price: req.body.price,
            id: produtos[produtos.length - 1].id++
        })
    })

router
    .get('/:id', (req, res) => {
        let produtoPorId = produtos.filter(produto => produto.id == req.params.id)[0]
        res.json(produtoPorId)
    })

    .delete('/:id', (req, res) => {
        produtos = produtos.filter(produto => produto.id != req.params.id)
        res.json(produtos)
    })

    .put('/:id', (req, res) => {
        let produtoPorId = produtos.filter(produto => produto.id == req.params.id)[0]
        produtoPorId.name = req.body.name
        produtoPorId.price = req.body.price
        res.json(produtoPorId)
    })



module.exports = router