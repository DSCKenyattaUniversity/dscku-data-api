//initialize express router
let router = require('express').Router()

//import user controller
var membersController = require('../controller/members')

// create members routes
router.route('/members')
    .get(membersController.getMembers)

// export API routes
module.exports = router