//initialize express router
let router = require('express').Router()

//import user controller
var membersController = require('../controller/publicMembers')

// create members routes
router.route('/public/members')
    .get(membersController.getMembers)

// export API routes
module.exports = router