const express = require('express') // create instance of express app
const app = express() // initialize the app
const port = process.env.PORT || 3000 // define port
const path = require('path') // get path for routing
const cors = require('cors') // access controll origin
app.use(cors())

//view engine (css images and static files)
app.set('/views', path.join(__dirname, 'views'))
app.use(express.static('views'))
app.use('/static', express.static('static'))

//default home page/ route
app.get('/', (req, res) => ( res.sendFile(path.join(__dirname, '/views/docs.html')) ))

// import routes
const membersRoutes = require('./routes/members')
const publicMembersRoutes = require('./routes/publicMembers')

// render routes in the app
app.use('/api', membersRoutes, publicMembersRoutes)

// Start a TCP server listening for connections on the given port and host
app.listen(port, () => {
    console.log(`DSCKU Data API running on port ${port}`)
})