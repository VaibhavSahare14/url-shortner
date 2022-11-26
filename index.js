const express = require("express")
const app = express()

// Database config
const db = require('./config/db')
db.once('open', () => console.log('DB Connected'))
db.on('error', () => console.log('Error'))

// Routes Config
app.use(express.json({
    extended: false
}))
app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))

//Listen for incoming requests
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))