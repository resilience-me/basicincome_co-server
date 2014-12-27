// the server module collects data from a financial platform
// this example collects data from Ripple
// you could easily create a module for BTC, or Ethereum, or whatever

exports.connect = function(db){
    
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
    get_collections()

});//end remote connect


function get_collections(){
    var accounts = []
    db.getCollectionNames(function(err, names) { 
        for(var i=0;i<names.length;i++){
            if(names[i].length===34)
            accounts.push(names[i])
        }
            request_subscribe(accounts)
    });
}
    


// ---------------------------- connect to rippled -----------------------------

function request_subscribe(accounts){
    
// ---------------------------- connect to ripple-lib -----------------------------


var req = remote.request_subscribe();
req.message.accounts = accounts
console.log(req.message.accounts)
req.request();
remote.on('transaction', function(data){
 

console.log(data.engine_result_message)

// ---------------------------- connect BTC-transaction

var COLLECTION = db.collection(data.transaction.Destination);

// filter out transactions






if(data.transaction.Amount.currency === "RES"){
                transaction()

}


function transaction(){
        
    //get taxRate
     db.collection(data.transaction.Destination).findOne({type: "contract", currency: data.transaction.Amount.currency}, function(err,doc){
            var taxRate;

            if(doc === null)consumption_outside_network()
            else{
            taxRate = doc.taxRate
            console.log(taxRate)
            update_collection(taxRate)
            } 
    }) 
   
}  
         
function consumption_outside_network(){
    
    // upsert safety net
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


              
    function update_collection(taxRate){    
        

    // upsert safety net
    db.collection(data.transaction.Account).findAndModify({
        query: {type: "safety_net", currency: data.transaction.Amount.currency, taxRate: taxRate}, 
        update:{$inc:{total_pathway:Number(data.transaction.Amount.value)}}, 
        upsert: true,
        new: true
        
    }, 
        function(err,doc){
            console.log(doc)
        })
        
        
    // upsert dividend_pathways
    db.collection(data.transaction.Destination).findAndModify({
        query: {type: "dividend_pathway", currency: data.transaction.Amount.currency, taxRate: taxRate}, 
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
}

        

// ---------------------------- connect BTC-transaction

if(accounts.indexOf(data.transaction.Destination) === -1){
    
console.log(data.transaction.Account + " consumed outside the network")
    
}



})//end remote.on
}//end request_subscribe()





}//end module.exports
    
    




