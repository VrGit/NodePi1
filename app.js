const express = require('express') ;
const path = require('path');
const fs = require('fs') ;
const paramsFile = __dirname+'/params.json' ;
let rawParams = fs.readFileSync(paramsFile);
var data = JSON.parse(rawParams);

const app = express ();


function add (r) {
    let max = -1 ;
    Object.keys(data).forEach (
        key => {
            let i = parseInt(key) ;
            if (i>max) max=i ;
        }
    ) ;
    max++ ;
    data[max]=r ;
}
function save () {
    let str = JSON.stringify(data, null, 2);
    fs.writeFile(paramsFile, str, (err) => {
        if (err) throw err;
     });
}

// app.use(express.static('public')) ;

app.get ('/params', function (req,res) {
    add(req.query.name) ;
    save ();
    let str = JSON.stringify(data, null, 2);
    res.send(str) ;
 });


// Démarre le server sur le port 500
app.listen(process.env.PORT || 5000, () => { console.log("Server is running ...")}) ;

