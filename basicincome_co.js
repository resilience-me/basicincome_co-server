exports.connect = function(db, callback){
var ws = require("nodejs-websocket");

var server = ws.createServer(function (conn) {
    console.log("User connected...");


    conn.on("text", function (str) {
        
        console.log(str)
        console.log(typeof(str))
        if(typeof str == 'string'){
            var address = str
            console.log("account Ripple log in")


var get_all_collections =require('./get_all_collections.js')
get_all_collections.get_all_collections(function(accounts){
    
    
    if(accounts.indexOf(address) === -1){
        
     
        //add collection to request_subscribe()
        db.collection('accounts').findAndModify({ 
        query: {account: ACCOUNT_ID}, 
        upsert: true
        })
        
        console.log("account now connected to Basicincome.co")
    }
    else{
        
        //compute-swarm-dividend
        console.log("calculating dividend payments")
        
        var swarm = require('./swarm_redistribution.js')

        swarm.compute_swarm(address, find_highest_accumulated_dividend)

function find_highest_accumulated_dividend(linez){
    

var lines = linez
var highest_accumulated_dividend = {"account": "", "accumulated_amount": ""}

var i = 0
loop(lines)
    function loop(lines){

    var account_in_lines = lines[i].account

          // upsert safety net (sum of all safety_net_pathways)
    db.collection(lines[i].account).findOne({
        query: {type: "accumulated_dividends", currency: "RES"}

        
    }, 
        function(err,doc){
            console.log(doc)

// filter out highest accumulated ammount (Optimization Layer)
            if (highest_accumulated_dividend.accumulated_amount < doc.accumulated_amount){
                
                console.log(account_in_lines + " " +address)
            highest_accumulated_dividend = {"account": account_in_lines, "accumulated_amount": doc.accumulated_amount}
            
            
            
            
            }
            
        i++

    if(i<lines.length){
        loop(lines)
    }
    else{
        console.log(JSON.stringify(highest_accumulated_dividend))
        conn.sendText(JSON.stringify(highest_accumulated_dividend));
    } 
            
        })
    


    }
    
    
}

 function after_loop(highest_accumulated_dividend, callback){
console.log("THISSS "+JSON.stringify(highest_accumulated_dividend))
console.log("hejbacon")

var payment = JSON.stringify(highest_accumulated_dividend)
callback(null, payment)
    }


    
      
    

    
}

        
        
        
    })
                //request_subscribe(accounts)

}





            
        
        else{
        console.log("wtf ???")

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