// create actual express server
// first require express library to be downloaded
const express = require("express")

// then to setup our actual server we have to simply call the express() function
const app = express()

//setup view engine
app.set('view engine', 'ejs');

//here will be logged to the terminal, the user will see Hi displayed on the page
app.get('/', (req,res) => {
    console.log("Here")
    
    //this throws a server error to the user when they access the root webpage 
    // res.sendStatus(500)


    // res.send('Hi') .send is only usefule for testing

    //can chain together various responses
    // res.status(500).send("Hi")

    //can also send json
    // res.json({ message: 'Error'})

    //can allow the user to download files, so when u are on the page it will automattically download your resume 
    // res.download('server.js') 


    // *****IMPORTANT******
    // you can also render html templates
    //with res.render(), by default all of your view files are going to live in views folder


    //you pass information from server down into your views template
    //by adding an additional argument, e.g. {text:"World"}
    res.render('index', {text: "World"})

})

//userRouter is storing the router containing the user routes
const userRouter = require('./routes/users')

//in order to link up the routes we created in users.js we need to call our app.use()
//we are going to mount our rounter ontop of /users, so anything that starts with /user we are going to add all these different routes to it
app.use('/users', userRouter)


//to make our server run, our app should listen on port 3000

app.listen(3000)

//we have to setup routes next

