const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello'))
// eslint-disable-next-line
app.listen(3000, ()=>console.log('Listening port 3000'))