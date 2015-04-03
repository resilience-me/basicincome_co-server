
/*loading mongodb*/    
var mongojs = require("mongojs")
var db_ripple = mongojs("mongodb://guest:guest@ds049150.mongolab.com:49150/basicincome_co");   

var db_bitcoin = mongojs("");   



//add financial platforms here --->

/*
add as many as you want financial platforms as you want, 
right now Bitcoin and Ripple
*/


var connect_to_ripple = require('./financial_platforms/connect_to_ripple.js')
connect_to_ripple.connect(db_ripple)

//var connect_to_bitcoin = require('./financial_platforms/connect_to_bitcoin.js')
//connect_to_ripple.connect(db_bitcoin)





//add client-interfaces

var basicincome_co = require('./basicincome_co')
basicincome_co.connect(db, dividend_algorithm)



var algorithm = require("./dividend_algorithm")

function dividend_algorithm(account_id){
    console.log("running dividend algorithm for: "+account_id)
    algorithm.API(db, account_id, send_client)
function send_client(payment){
    console.log("sending these payments: " +payment)
    basicincome_co.send_client(payment, account_id)
}
}
