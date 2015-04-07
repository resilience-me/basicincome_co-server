    
var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 4730,function(){
  console.log("Started on PORT 4730");
})    







// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' }); 

});

// more routes for our API will happen here


router.route('/connect_transaction')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
         var connect_transaction = require('./connect_transaction.js')
/*
{"account": "account", "destination": "destination", "currency": "currency", "amount": "amount", "taxRate": "taxRate"}
*/

            connect_transaction.connect_transaction(req.body.account, req.body.destination, req.body.currency, req.body.amount, req.body.taxRate)
        
        
         res.json({ message: "TRANSACTION CONNECTED" }); 

    });
    
    

router.route('/sign_dividends')

 
    .post(function(req, res) {
        console.log(req.body)

        var swarm = require('./swarm_redistribution.js')
        var find_highest_accumulated_dividend = require('./find_highest_accumulated_dividend.js')
        swarm.compute_swarm(req.body.address, do_it)
        
        
        function do_it(lines){
            find_highest_accumulated_dividend.find_highest_accumulated_dividend(lines, function(data){
                res.json({ message: data }); 
            })
            
        }
        

    });
    
    


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



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

/*
var connect_to_bitcoin = require('./financial_platforms/connect_to_bitcoin.js')
connect_to_bitcoin.connect(db_bitcoin)
*/




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