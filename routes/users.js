const express = require("express")
const router = express.Router()

//router has same methods as the app

//router is always going to go to /users

router.get('/', (req, res) => {
    res.send("User List")

})

router.get('/new', (req, res) => {
    res.send("User New Form")

})

//want to access user based on id of user
//to make a dynamic parameter add a colon, :, 
//this is basically saying any route which starts off with /users (since inside our users router)

//can put all your get put and delete requests here
router

    .route('/:id')

    .get((req,res) => {
    //request the user id (which is in the url)
        console.log(req.user)
        res.send('Get User with id ${req.params.id}')
    })

    .put((req,res) => {
        //request the user id (which is in the url)
        res.send('Update User with id ${req.params.id}')
    
    })

    .delete((req,res) => {
        //request the user id (which is in the url)
        res.send('Delete User with id ${req.params.id}')
    
    })




//.param function going to run any time it finds a param that matches the name you pass in
const users = [{ name: "Kyle"},{name: "Sally"}]

router.param("id", (req, res, next, id ) => {
    req.user = user[id]
    next()

})

// router.get('/:id', (req,res) => {
//     //request the user id (which is in the url)
//     res.send('Get User with id ${req.params.id}')

// })

// //put route that updates a user based on their id
// router.put('/:id', (req,res) => {
//     //request the user id (which is in the url)
//     res.send('Get User with id ${req.params.id}')

// })

// //delete route that allows you to delete a user based on their id
// router.delete('/:id', (req,res) => {
//     //request the user id (which is in the url)
//     res.send('Get User with id ${req.params.id}')

// })


//exports router from this file
module.exports = router