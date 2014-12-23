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

// what BitCoin gateways should the app work for ??
var bitcoin_gateways = ["rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B", "rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q", "rMm3rCYgxAmY1E3N4iVeuiizCCHmK4wxaK"]
//                              B I T S T A M P                     btc2ripple                               fakeBTCgateway              
console.log("yooo")
console.log(data.transaction.Amount.issuer)
console.log(bitcoin_gateways.indexOf(data.transaction.Amount.issuer))

console.log(data.mmeta._affectedAccounts)







if(data.transaction.Amount.currency === "BTC"){
    
    for(var i=0;i<bitcoin_gateways.length;i++){
    console.log(data.mmeta._affectedAccounts.indexOf(bitcoin_gateways[i]))

        if(data.mmeta._affectedAccounts.indexOf(bitcoin_gateways[i])>-1){
                transaction()
                console.log(i)
                break
        }
    }

}


function transaction(){
        
    //get taxRate
    COLLECTION.findOne({type: "wallet", currency: data.transaction.Amount.currency}, function(err,doc){
            var taxRate;

            if(doc === null){taxRate = 0}
            else taxRate = doc.taxRate
            console.log(taxRate)
            update_collection(taxRate)
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
    
    




