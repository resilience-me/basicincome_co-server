

/*loading mongodb*/    
var mongojs = require("mongojs")
var db = mongojs("mongodb://guest:guest@ds049150.mongolab.com:49150/basicincome_co");   



exports.find_highest_accumulated_dividend = function(linez, callback){
    

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
                
              
            highest_accumulated_dividend = {"account": account_in_lines, "accumulated_amount": doc.accumulated_amount}
            
            
            
            
            }
            
        i++

    if(i<lines.length){
        loop(lines)
    }
    else{
        console.log(JSON.stringify(highest_accumulated_dividend))
        callback(JSON.stringify(highest_accumulated_dividend));
    } 
            
        })
    


    }
    
    
}
