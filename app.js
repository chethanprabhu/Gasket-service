const express = require("express"); //import express
const middleware = require("./middlewares/middleware");

const app = express(); //initiate the express library
const port = 3000; //some port where our app will run
app.use(middleware); //using a middleware. Now all api calls will go through this middlewares
app.use(express.json()) //body parser middleware. Earlier we used to install the body-parser package and do app.use(bodyParser.json())

app.post("/test/:initial", (req, res) => { // "/" is the route. On visting this route the respective callback will run
    const initial_name = req.params.initial //getting data from path param
    const first_name = req.query.first; //getting data from query param.
    const second_name = req.query.second

    const timeOfDay = req.body.timeOfDay

    res.json({ //res.json is for sending the json data. We can also use res.send. But .json is more specific
        text: `Welcome ${initial_name}. ${first_name} ${second_name}. Good ${timeOfDay}`
    })
})

app.get("/", () => {
    res.json({test: "working"})
})

app.get("/express", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(port, () => { //app.listen is to start the server on the respective port.
    console.log(`app started at port ${port}`); //this callback will run once the server the started
})
