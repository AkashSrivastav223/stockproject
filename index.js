//for stock market app index js file
const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

//set handlwbars middlware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var otherstuff = "hello there, this is other stuff ...."
// set handlebar routes
app.get('/', function (req, res) {
    res.render('home',{
    	stuff: otherstuff
    });
});

//set static folder
app.use(express.static(path.join(__dirname,'public')));
// app.get("/",(req,res)=>{
// 	res.end("<h1>Hello</h1>");
// })
app.listen(PORT,()=>console.log("listening at port "+PORT));
