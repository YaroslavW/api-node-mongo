const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const products = [
    {
        id: 1,
        name: 'phone',
        price: 300,
    },
    {
        id: 2,
        name:'tablete',
        price: 467,
    }
]
app.get('/', (req, res) => res.send('Hello'))

app.post('/products', (req, res) => {
    products.push(req.body)
    res.json(req.body)
})
app.get('/products', (req, res)=> res.json(products))

app.put('/products/:id',(req, res) => {
    const product = products.find(p => p.id === +req.params.id)
    const productIndex = products.indexOf(product)
    const newProduct = { ...product, ...req.body}
    products[productIndex] = newProduct
    res.send({ success: true })
})
// eslint-disable-next-line
app.listen(3000, ()=>console.log('Listening port 3000'))