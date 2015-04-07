exports.connect = function(db_bitcoin){
    



app.post('/bitcoin', function (req, res) {
  if (req.body.payload.type == 'address') {
    console.log('address=' + req.body.payload.address + ' ' +
      'transaction=' + req.body.payload.transaction_hash + ' ' +
      'sent=' + req.body.payload.sent + ' ' +
      'received=' + req.body.payload.received + ' ' +
      'confirmations=' + req.body.payload.confirmations);
    res.send('OK\n');
    
    if(req.body.payload.received >0){
        transaction(req.body.payload.address, req.body.payload.input_addresses, req.body.payload.received)
    }
    
  }
});



  
  
// update consumption outside network penalty

function consumption_outside_network(){
    
    // upsert extra-network consumption
    db_bitcoin.collection(data.transaction.Account).findAndModify({
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


function transaction(account, destination, amount){
        
    //get taxRate
     db_bitcoin.collection(destination).findOne({type: "contract"}, function(err,doc){
            var taxRate;


            taxRate = doc.taxRate
            console.log(taxRate)
            console.log("taxRate" + taxRate)
            
            var connect_transaction = require('../connect_transaction.js')


            connect_transaction.connect_transaction(account, destination, amount, taxRate)
            
            

    }) 
   
} 
  
  
  
    
    
}
