exports.connect = function(db_bitcoin){
    

// ----- UNFINISHED BITCOIN-EXAMPLE SCRIPT -----
// add your financial platform here, here's example code for Bitcoin

// someone else can finish this, I like ripple more
    
/* Loading blocktrail-sdk with Node.js */

var blocktrail = require('blocktrail-sdk');
 
console.log("123456789 Satoshi to BTC: ", blocktrail.toBTC(123456789));
console.log("1.23456789 BTC to Satoshi: ", blocktrail.toSatoshi(1.23456789));


var client = blocktrail.BlocktrailSDK({apiKey: "724d383f0403bcdc77994332907acf75ff22f635", apiSecret: "52cc8d906c1b37f425fec97e1345a531f7be7037", network: "BTC", testnet: false});




client.subscribeAddressTransactions('1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp', 6, function(err, result) {console.log(result)});




// load all connected users from that financial platform
function get_all_collections(){
    
var get_all_collections =require('../get_all_collections.js')
get_all_collections.get_all_collections(function(accounts){
                request_subscribe(accounts)

})
}
get_all_collections()





function request_subscribe(accounts){
    
// connect to ripple-lib 


var req = remote.request_subscribe();
req.message.accounts = accounts
console.log(req.message.accounts)
req.request();
remote.on('transaction', function(data){
 

// filter out payement transactions


if(data.transaction.TransactionType === 'Payment'){

// filter out transactions from accounts within the network    
if(accounts.indexOf(data.transaction.Account)!== -1){
console.log(data.transaction.TransactionType + "scanned")

// filter by currencies that are in use by the account that recieved the payment

  db.collection(data.transaction.Destination).find({type: "contract"}, function(err,doc){
            console.log("hi")
            for(var i=0;i<doc.length;i++){
                
                if(data.transaction.Amount.currency === doc[i].currency){
                    
                console.log(data.transaction)
                console.log(data.engine_result_message)
                    
                    transaction()
                break
                
                }
                else consumption_outside_network()
            }
            
            
            
            
    }) 
    
    
}
else{
    console.log(data.transaction.Account)
    console.log(accounts.indexOf(data.transaction.Account))
    console.log("transaction from an account outside the network")    
}
}

// update consumption outside network penalty

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



// connect the transaction by creating a dividend pathway


function transaction(){
        
    //get taxRate
     db.collection(data.transaction.Destination).findOne({type: "contract", currency: data.transaction.Amount.currency}, function(err,doc){
            var taxRate;


            taxRate = doc.taxRate
            console.log(taxRate)
            console.log("taxRate" + taxRate)
            
            var connect_transaction = require('../connect_transaction.js')


            connect_transaction.connect_transaction(data.transaction.Account, data.transaction.Destination, data.transaction.Amount.currency, data.transaction.Amount.value, taxRate)
            
            

    }) 
   
} 
         
})
    
}


}