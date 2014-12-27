exports.connect = function(db, callback){
var ws = require("nodejs-websocket");

var server = ws.createServer(function (conn) {
    console.log("User connected...");


    conn.on("text", function (str) {
        
        console.log(str)

        var BLOB = JSON.parse(str)
        var ACCOUNT_ID = BLOB[0].account_id

        // the websocket recieves both "declare_tax" and "payments_sent", this filters out "declare_tax":
        if(str.indexOf("account_id")!==-1){swarm_redistribution()}
        function swarm_redistribution(){
        
        console.log("Received: "+str);

       
        //add collection to request_subscribe()
        db.collection('accounts').findAndModify({ 
        query: {account: ACCOUNT_ID}, 
        upsert: true
        })


callback(ACCOUNT_ID)
}
        
        
        
        

        
    })
    
    
        exports.send_client = function(payment, account_id) {
            var i = 0//to close function, each call opens a functions, receieved multiple socket copies
        console.log("outgoing payments sent !")
        console.log(payment)
            conn.sendText(JSON.stringify(payment));
           
           // listen for incoming websocket message
               conn.on("text", function (str) {
            var string = JSON.parse(str)

            if(str.indexOf("engine_result")!==-1 && i===0){payment_recieved()}
        function payment_recieved(){
            i++
            console.log("payment went through")
            console.log("Received: "+str);
            // deduct the dividend pathways
            var amount = String(payment.amount)
            db.collection(payment.node).findAndModify({
            query: {type: "dividend_pathway", currency: payment.currency, account: string.tx_json.Destination}, 
            update:{$inc:{total_pathway:-amount}}
            })
            // deduct from tax_blob
            db.collection(account_id).findAndModify({
            query: {type: "tax_blob", currency: payment.currency}, 
            update:{$inc:{total_amount:-amount}}
            })
        }

             })

        }
        
        
    }).listen(8080); console.log("server listening on port 8080");
}