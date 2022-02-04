const fs = require('fs')

function logeoRuta(req,res,next){
    let url = req.url
    fs.appendFileSync('userLogs.txt'," \n El usuario ingresó a la ruta: " + url)
    next()
}

module.exports=logeoRuta