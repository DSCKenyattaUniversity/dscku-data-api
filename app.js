const express = require('express') // create instance of express app
const app = express() // initialize the app
const port = process.env.PORT || 3000 // define port
const cors = require('cors') // access controll origin

app.use(cors())

// import routes
const membersRoutes = require('./routes/members')
const publicMembersRoutes = require('./routes/publicMembers')

// render routes in the app
app.use('/api', membersRoutes, publicMembersRoutes)

// Start a TCP server listening for connections on the given port and host
app.listen(port, () => {
    console.log(`DSCKU Data API running on port ${port}`)
})