var mongojs = require("mongojs")
var db = mongojs("mongodb://guest:guest@ds049150.mongolab.com:49150/basicincome_co");   

function get_all_collections(callback){

db.getCollectionNames(function(err,res){
    var collections = []
        for(var i =0;i<res.length;i++){
            if(res[i] !== 'test-accounts' && res[i] !== 'system.indexes'){
                collections.push(res[i])
            }
        }
        callback(collections)
        
    })
}

exports.get_all_collections = get_all_collections;