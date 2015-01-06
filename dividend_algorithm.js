exports.API = function(db, account_id, callback){


var swarm = require('./swarm_redistribution.js')
var payment = require('./send_payments.js')

//var TAXED_ACCOUNT = "rhWLSyUd1mpkjL1DsreSg2hZJAvnVdqfkd"
//var SECRET = "snNpKwUeVRtnZenjPtp2QHX1BUwjf"

//var TAXED_AMOUNT = 40



swarm.compute_swarm(account_id, how_much_tax_is_declared)

function how_much_tax_is_declared(lines, account_id){
    console.log(lines)
     db.collection(account_id).findOne({type:"tax_blob"}, function(err,res){
         create_payments(lines, res.currency, res.total_amount)
     })
}    
    

function create_payments(lines, currency, taxed_amount){
    
    
    
    console.log(lines.length)
    
    console.log(taxed_amount/lines.length)
    
    var PAYMENTS =[]
    for(var i=0;i<lines.length;i++){
        console.log(lines[i].account)
        
PAYMENTS.push({account: lines[i].account, amount:taxed_amount/lines.length})        
    }
    console.log(PAYMENTS)
    callback(PAYMENTS)
    //send_payments(PAYMENTS)
}



function send_payments(PAYMENTS){
    for(var i=0;i<PAYMENTS.length;i++){
        
    //payment.send_payment(taxed_amount, SECRET, PAYMENTS[i].account, PAYMENTS[i].amount, "RES")

    }
    
    
    
}
}