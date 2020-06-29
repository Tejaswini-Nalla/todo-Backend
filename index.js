const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


require('./routes/todoRoutes')(app);
app.listen(3000, () => console.log("Server listening"));