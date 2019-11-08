// public data
// import members data from members model
const Members = require('../model/members')
const members = Members()

// get members
exports.getMembers = (req, res) => {
    // let's manipulate our data
    // for each remove username, phone, email and add membership_id
    const publicMembers = members.map(item => {
        delete item.username
        delete item.phone
        delete item.email
        // let's generate a random id
        const randomId = Math.floor((Math.random() * 10000))
        const membershipId = `memb${randomId}`
        item['membership_id'] = membershipId
        return item
    })
    // return the output through an endpoint 
    res.status(200)
    res.json({
        // status:"Success",
        // message: "Your members request was successfully recieved",
        data:publicMembers
    })
}