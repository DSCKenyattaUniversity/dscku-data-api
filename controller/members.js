// import members data from members model
const Members = require('../model/members')
const members = Members()

// get members
exports.getMembers = (req, res) => {
    res.status(200)
    res.json({
        status:"Success",
        message: "Your members request was successfully recieved",
        data: members
    })
}