exports.API = function(db, account_id, callback){
    


var ACCOUNT_ID = db.collection(account_id);
var ACCOUNT = account_id

var COLLECTION = db.collection(ACCOUNT);
    
    
    var total_amount

    COLLECTION.findOne({type: "tax_blob"},function(err, doc) {
    console.log(doc.total_amount)
total_amount = doc.total_amount
    });

    get_collections()


function get_collections(){
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

