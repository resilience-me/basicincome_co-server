exports.API = function(db, account_id, callback){
    


var ACCOUNT_ID = db.collection(account_id);
var ACCOUNT = account_id

var COLLECTION = db.collection(ACCOUNT);

var LINES = []


function get_currency(account_id){
     db.collection(account_id).findOne({type:"tax_blob"}, function(err,res){
         compute_swarm(res.currency, create_payments)
     })
}    
    
function compute_swarm(currency, callback){
    
    

lines(account_id)

function lines(account){
 db.collection(account).find({ type:"dividend_pathway" },function (err, doc){
    
        

    for(var i=0;i<doc.length; i++){
          if(JSON.stringify(LINES).indexOf(doc[i].account)===-1){

       LINES.push({account: doc[i].account, pathway: doc[i].total_pathway, line: Number(LINES.length)}) 
        lines(doc[i].account)
          }
          //else console.log("CIRCULAR")
    }



        });
}

setTimeout(function(){callback(LINES)}, 3000)
    
}

    var total_amount

    COLLECTION.findOne({type: "tax_blob"},function(err, doc) {
    console.log(doc.total_amount)
total_amount = doc.total_amount
    });

    get_collections()


//function get_collections(){
    var accounts = []
    db.getCollectionNames(function(err, names) { 
        for(var i=0;i<names.length;i++){
            if(names[i].length===34 && names[i]!== ACCOUNT)
            accounts.push(names[i])
        }
            create_payments(accounts)
    });
}

    var i = 0

    var PAYMENTS = []

function create_payments(accounts){

loop(accounts)

function loop(accounts){
        console.log(accounts[i])

        db.collection(accounts[i]).findOne({ total_pathway: { $gt: 0 } },function (err, doc){
        if(doc!==null){
    
        console.log(doc)
        PAYMENTS.push({account: accounts[i], amount: ""})
        }
        
        i++
        if(i<accounts.length)loop(accounts)
        else  add_dividend_amount()
        
        })
        
   
}
    
}

function add_dividend_amount(){
    var dividend = total_amount / PAYMENTS.length
    
    for(var i= 0;i<PAYMENTS.length; i++){
        PAYMENTS[i].amount = dividend
    }
            console.log(PAYMENTS)

callback(PAYMENTS)
}




};

