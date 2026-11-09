const express = require('express');
const userDB = require('./models/userDB');

const app = express();
//const router = express.Router();
const PORT = 3000;

// ** Middleware **
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");


// ** Routes ***
app.get("/", function (req, res) {
    userDB.getUsers(function (data) {
        console.log(data);
        res.render("item-list", { items: data });
	    //manageUsers users and data will set back to default
    });
});

app.get("/users", function (req, res) {
    userDB.getUsers(function (data) {
	console.log(data);
	res.render("manageUsers", { users: data});
    });
});

//Needs to redirect to a new page to render /users
app.post("/users", function (req, res) {
    userDB.addUser(req.body, function (data) {
        console.log(data);
        res.redirect("/");
    });
});

app.post("/", function (req, res) {
	userDB.deleteUser(function (data) {
	console.log(data);
	res.redirect("/");
     });
});



app.listen(PORT, function () {
    console.log(`Listening on Port: ${PORT}`);
});

//module.exports = router;
