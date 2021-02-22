const express = require('express') ;
const app = express ();



// app.use(express.static('public')) ;

app.get ('/params', function (req,res) {
    console.log(req.query.name) ;
    res.send('value='+ req.query.name) ;
 });


// Démarre le server sur le port 500
app.listen(process.env.PORT || 5000, () => { console.log("Server is running ...")}) ;

