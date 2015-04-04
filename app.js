var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();

app.use(bodyParser.json());



app.post('/bitcoin', function (req, res) {
  if (req.body.payload.type == 'address') {
    console.log('address=' + req.body.payload.address + ' ' +
      'transaction=' + req.body.payload.transaction_hash + ' ' +
      'sent=' + req.body.payload.sent + ' ' +
      'received=' + req.body.payload.received + ' ' +
      'confirmations=' + req.body.payload.confirmations);
    res.send('OK\n');
  }
});


app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('i am a beautiful butterfly');
});

app.listen(process.env.PORT || 4730,function(){
  console.log("Started on PORT 4730");
})



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

var connect_to_bitcoin = require('./financial_platforms/connect_to_bitcoin.js')
connect_to_ripple.connect(db_bitcoin)





//add client-interfaces
/*
var basicincome_co = require('./basicincome_co')
basicincome_co.connect(db_ripple, dividend_algorithm)



var algorithm = require("./dividend_algorithm")

function dividend_algorithm(account_id){
    console.log("running dividend algorithm for: "+account_id)
    algorithm.API(db_ripple, account_id, send_client)
function send_client(payment){
    console.log("sending these payments: " +payment)
    basicincome_co.send_client(payment, account_id)
}
}
*/