// the server module collects data from a financial platform
// this example collects data from Ripple
// you could easily create a module for BTC, or Ethereum, or whatever

exports.connect = function(db){

// swarm-scanner
var swarm = require('./swarm_redistribution.js')


 /* Loading ripple-lib with Node.js */
var ripple = require('ripple-lib')
var Remote = ripple.Remote;


var remote = new Remote({
  // see the API Reference for available options
  servers: [ 'wss://s1.ripple.com:443' ]
});

remote.connect(function() {
    console.log("connected to Ripple")
  /* remote connected */

});//end remote connect

var get_all_collections =require('./get_all_collections.js')
get_all_collections.get_all_collections(function(accounts){
                request_subscribe(accounts)

})


// connect transactions


// ---------------------------- connect to rippled -----------------------------

function request_subscribe(accounts){
    
// ---------------------------- connect to ripple-lib -----------------------------


var req = remote.request_subscribe();
req.message.accounts = accounts
console.log(req.message.accounts)
req.request();
remote.on('transaction', function(data){
 


// ---------------------------- connect BTC-transaction

var COLLECTION = db.collection(data.transaction.Destination);

// filter out transactions




// filter by currency
if(data.transaction.TransactionType === 'Payment'){
console.log(data.transaction.TransactionType + "scanned")
if(data.transaction.Amount.currency === "RES"){
    
console.log(data.transaction)
console.log(data.engine_result_message)
    
                transaction()

}
}

function transaction(){
        
    //get taxRate
     db.collection(data.transaction.Destination).findOne({type: "contract", currency: data.transaction.Amount.currency}, function(err,doc){
            var taxRate;

            if(doc === null)consumption_outside_network()
            else{
            taxRate = doc.taxRate
            console.log(taxRate)
            connect_transaction(data.transaction.Account, data.transaction.Destination, data.transaction.Amount.currency, data.transaction.Amount.value, taxRate)
            } 
    }) 
   
}  
         
function consumption_outside_network(){
    
    // upsert extra-network consumption
    db.collection(data.transaction.Account).findAndModify({
        query: {type: "consumption_outside_network", currency: data.transaction.Amount.currency}, 
        update:{$inc:{total_amount:Number(data.transaction.Amount.value)}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })    
    
}


// ----- STANDARDIZED SCRIPT -------

// connect transaction to network
              
function connect_transaction(account, destination, currency, amount, taxRate){  

   // upsert dividend_pathways
    db.collection(destination).findAndModify({
        query: {type: "dividend_pathway", account: account, currency: currency, taxRate: taxRate}, 
        update:{$inc:{total_pathway:Number(amount)}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })
        
    // upsert safety_net pathway (mirror of dividend pathway)
    db.collection(account).findAndModify({
        query: {type: "safety_net_pathway", account: destination, currency: currency, taxRate: taxRate}, 
        update:{$inc:{total_pathway:Number(amount)}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })

        
   // upsert safety net (sum of all safety_net_pathways)
    db.collection(account).findAndModify({
        query: {type: "total_safety_net", currency: currency, taxRate: taxRate}, 
        update:{$inc:{total_pathway:Number(amount)}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })
        
        var dividend_amount = Number(amount)*taxRate
        
console.log("dividend_amount = " + dividend_amount)
        
  db.collection(destination).findAndModify({
        query: {type: "tax_blob", currency: currency}, 
        update:{$inc:{total_amount:dividend_amount}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
                        console.log(doc)

        })

// ------------------------- upsert accumulated dividends

// need swarm-algorithm

swarm.compute_swarm(destination, upsert_accumulated_dividend)


function upsert_accumulated_dividend(lines) {

console.log("lines.length = " + lines.length)

var dividend_piece = Number(dividend_amount) / Number(lines.length)
console.log("dividend_piece = " + dividend_piece)



 for(var i=0;i<lines.length;i++){
        console.log(lines[i].account)
        
        
          // upsert safety net (sum of all safety_net_pathways)
    db.collection(lines[i].account).findAndModify({
        query: {type: "accumulated_dividends", currency: currency}, 
        update:{$inc:{accumulated_amount:Number(dividend_piece)}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)

        })
        
    }


// when making payment --->
find_highest_accumulated_dividend(lines)

}   
    

function find_highest_accumulated_dividend(lines){
var highest_accumulated_dividend = {"account": "", "accumulated_amount": ""}

console.log(highest_accumulated_dividend)

 for(var i=0;i<lines.length;i++){
        console.log(lines[i].account)
        
        
          // upsert safety net (sum of all safety_net_pathways)
    db.collection(lines[i].account).findOne({
        query: {type: "accumulated_dividends", currency: currency}

        
    }, 
        function(err,doc){
            console.log(doc)

// filter out highest accumulated ammount (Optimization Layer)
            if (highest_accumulated_dividend.accumulated_amount < doc.accumulated_amount){
            highest_accumulated_dividend = {"account": account, "accumulated_amount": doc.accumulated_amount}
            console.log("account = " + account +" doc.accumulated_amount = " +doc.accumulated_amount)
            console.log(highest_accumulated_dividend)
            }
        })
        
    }
    
    
}

}//end connect_transaction

/*              
function update_collection(taxRate){    
        

 
        
        
    // upsert dividend_pathways
    db.collection(data.transaction.Destination).findAndModify({
        query: {type: "dividend_pathway", account: data.transaction.Account, currency: data.transaction.Amount.currency, taxRate: taxRate}, 
        update:{$inc:{total_pathway:Number(data.transaction.Amount.value)}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })
        
    // upsert safety_net pathway (mirror of dividend pathway)
    db.collection(data.transaction.Account).findAndModify({
        query: {type: "safety_net_pathway", account: data.transaction.Destination, currency: data.transaction.Amount.currency, taxRate: taxRate}, 
        update:{$inc:{total_pathway:Number(data.transaction.Amount.value)}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })

        
   // upsert safety net (sum of all safety_net_pathways)
    db.collection(data.transaction.Account).findAndModify({
        query: {type: "total_safety_net", currency: data.transaction.Amount.currency, taxRate: taxRate}, 
        update:{$inc:{total_pathway:Number(data.transaction.Amount.value)}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })
 COLLECTION.findAndModify({
        query: {type: "tax_blob", currency: data.transaction.Amount.currency}, 
        update:{$inc:{total_amount:Number(data.transaction.Amount.value)*taxRate}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
        })

// ------------------------- upsert accumulated dividends

// need swarm-algorithm




swarm.compute_swarm(data.transaction.Account, upsert_accumulated_dividend)


function upsert_accumulated_dividend(lines) {

var dividend_piece = data.transaction.Amount.value / lines.length


 for(var i=0;i<lines.length;i++){
        console.log(lines[i].account)
        
        
          // upsert safety net (sum of all safety_net_pathways)
    db.collection(lines[i].account).findAndModify({
        query: {type: "accumulated_dividends", currency: data.transaction.Amount.currency}, 
        update:{$inc:{accumulated_amount:Number(dividend_piece)}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })
        
    }


}
        
        
    }

*/

        

// ---------------------------- connect BTC-transaction
/*
if(accounts.indexOf(data.transaction.Destination) === -1){
    
console.log(data.transaction.Account + " consumed outside the network")
    
}

*/

})//end remote.on
}//end request_subscribe()





}//end module.exports
    
    




