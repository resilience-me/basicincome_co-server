// ---------------------------- swarm-redistribution TEST ----------------------------------

// to test: $ node test.js

// this script is not finished. it doesnt´t work yet. It´s a sketch, a work in progress. 
// swarm-redistribution is a concept, I created it, read up on it @ http://resilience.me

// and FORK IT :D :D:D :) !

var mongojs = require("mongojs")
var db = mongojs("mongodb://test:test@ds059907.mongolab.com:59907/awesome_box");   


// ---------------------------- swarm-redistribution ----------------------------------




// FIRST, collect data from the coin platform

 // this example connects with http://client.basicincome.co

var account_id = 'rLaKjMvLbrAJwnH4VpawQ6ot9epZqJmbfQ'

var ACCOUNT_ID = db.collection(account_id);
var ACCOUNT = account_id

var COLLECTION = db.collection(ACCOUNT);
    
    
var q = 0//loop through all currencies

function get_dividend_lines(callback){
    get_wallet()
    function get_wallet(){
    ACCOUNT_ID.find({type:"tax_blob", total_amount: {$gt: 0}}, function(err,doc){
        
        if(q<doc.length){
        var total_amount = doc[q].total_amount
        var currency = doc[q].currency

        // get the taxRate
        ACCOUNT_ID.findOne({type: "wallet", currency: doc[q].currency}, function(err,doc){
            console.log(ACCOUNT_ID)
console.log(doc)
        var taxRate=doc.taxRate;

        get_dividend_pathway(taxRate, currency, total_amount)
        })
        }
        else console.log("swarm-redistribution finished for all currencies")
    });
    }
    
    function get_dividend_pathway(taxRate, currency, total_amount){
  
    console.log("scanning collection: "+ COLLECTION);
    COLLECTION.find({type: "dividend_pathway", currency: currency, taxRate: { $lte: taxRate }},function(err, doc) {
console.log(doc)
    callback(doc, taxRate, total_amount)

    });

}

}

        

var get_collection = function() {
    //connect your coin here, this is how you connect to the API
    //the callback feeds collection/dividend-pathways
    //this example connects with http://client.basicincome.co
COLLECTION = db.collection(ACCOUNT);
get_dividend_lines(swarm_redistribution)
}
get_collection()


// -------------------------- STUFF:
// ALL THIS needs to be improved...

    var lines = [];//lines.push(line)
   
    
    var x = 0;//recursion()
    var y = 0;//recursion()
    var z = 0
   
    var taxRate_quota_sum = 0
    var taxRate_switch = false
    var taxRate_x;
    var taxRate_ratio_x;





// ---------------------- SWARM-REDISTRIBUTION ----------------------------

function swarm_redistribution(pathway, taxRate, total_amount){


// ------- First, construct fractal dividend lines -----------------
// see http://www.resilience.me/theory.html


 var w = 0;
 var line = []
 
 taxRate_x = taxRate
 taxRate_ratio_x = 1



 if(pathway.length>0){

    loop(pathway, line, w, taxRate, total_amount);// add taxRate ratios
    
 }
 else{
 console.log("collection is empty")
 next_node(total_amount)
 }

    
    
    function loop(pathway, line, w, taxRate, total_amount) {
    // calculate taxRatio
    function calculate_taxRatio(pathway, line, w, taxRate, total_amount){
    var taxRate_y = pathway[w].taxRate
   
    if(taxRate_y > taxRate_x)taxRate_y = taxRate_x
    var taxRate_ratio_y = Number(taxRate_y) / Number(taxRate_x)
    var taxRate_quota = Number(taxRate_ratio_x) * Number(taxRate_ratio_y)
    push_lines(taxRate_quota, total_amount)
    }
    calculate_taxRatio(pathway, line, w, taxRate, total_amount)

    function push_lines(taxRate_quota, total_amount){

    // push lines
    if (JSON.stringify(lines).indexOf(pathway[w].account) === -1 && pathway[w].account !== account_id){
    line.push({account: pathway[w].account, currency: pathway[w].currency, taxRate: pathway[w].taxRate, taxRate_quota: taxRate_quota, node: ACCOUNT});
    taxRate_quota_sum = Number(taxRate_quota_sum) + Number(taxRate_quota)
    }
    else console.log("CIRCULAR");
    
    w++;
    console.log(w)
    
    if (w<pathway.length){loop(pathway, line, w, taxRate, total_amount)}
    else {
        if (line.length>0){
            lines.push(line)
        };
        console.log(lines)
        next_node(total_amount)
    }
    }
    }

      
// STEP 2: branch out (add all dividend pathways for lines[x][i].account)        


    function next_node(total_amount){
            if(x<lines.length){
            
                
        if(y<lines[x].length){
            taxRate_ratio_x = Number(lines[x][y].taxRate_quota)
            taxRate_x = lines[x][y].taxRate
            ACCOUNT = lines[x][y].account;
            
            y++;
            z++
            console.log("recursion nr "+z)
            get_collection();
        }
                
        else {
            x++;
            y = 0
            next_node(total_amount)
          
        }
        
            }
            else console.log(lines), console.log("generating payments..."), outgoing_payments(total_amount)
        }
         
             
    // ------- SECOND, outgoing payments -----------------
    // see http://www.resilience.me/theory.html 
    function outgoing_payments(total_amount){
         var total_amount_pie = Number(total_amount)/taxRate_quota_sum
         
         // create outgoing payment
         x = 0
         y = 0
         loop()
         function loop(){

            if (x<lines.length){     
                if (y<lines[x].length){
                console.log(lines[x][y])
                var amount = Number(total_amount_pie * lines[x][y].taxRate_quota)
                var currency = lines[x][y].currency
                var account = lines[x][y].account
                var payment = {account: account, amount: amount, currency: currency, node: lines[x][y].node}
                
                console.log(payment, account_id)
                y++
                loop()
                }
                else x++, y =0, loop()
            }else q++, console.log("swarm-redistribution for currency: "+lines[0][0].currency +" is done. loading next currency..."),ACCOUNT = account_id, get_collection();
         }//create outgoing payments to everyone in the swarm
    }
   

        
}//end swarm_redistribution()