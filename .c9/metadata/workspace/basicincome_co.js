{"filter":false,"title":"basicincome_co.js","tooltip":"/basicincome_co.js","undoManager":{"mark":57,"position":57,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":85,"column":1},"action":"insert","lines":["exports.connect = function(db, callback){","var ws = require(\"nodejs-websocket\");","","var server = ws.createServer(function (conn) {","    console.log(\"User connected...\");","","","    conn.on(\"text\", function (str) {","        ","        ","","","        if(str.indexOf(\"account_id\")!==-1){update_taxRates_and_swarm_redistribution()}","        function update_taxRates_and_swarm_redistribution(){","        ","        console.log(\"Received: \"+str);","","        var BLOB = JSON.parse(str)","        var ACCOUNT_ID = BLOB[0].account_id","        var WALLET = BLOB[1]","        var COLLECTION = db.collection(ACCOUNT_ID);","","        ","        ","        ","        // update wallet","        COLLECTION.remove({ type: 'wallet' })","        ","        for(var i=0;i<WALLET.length; i++){","        COLLECTION.save({ type: \"wallet\", currency: WALLET[i].currency, taxRate: WALLET[i].taxRate })","        }","        ","","               ","        //add collection to request_subscribe()","        db.collection('accounts').findAndModify({ ","        query: {account: ACCOUNT_ID}, ","        upsert: true","        })","","","callback(ACCOUNT_ID)","}","        ","        ","        ","        ","","        ","    })","    ","    ","        exports.send_client = function(payment, account_id) {","            var i = 0//to close function, each call opens a functions, receieved multiple socket copies","        console.log(\"outgoing payments sent !\")","            conn.sendText(JSON.stringify(payment));","           ","           // listen for incoming websocket message","               conn.on(\"text\", function (str) {","            var string = JSON.parse(str)","","            if(str.indexOf(\"engine_result\")!==-1 && i===0){payment_recieved()}","        function payment_recieved(){","            i++","            console.log(\"payment went through\")","            console.log(\"Received: \"+str);","            // deduct the dividend pathways","            var amount = String(payment.amount)","            db.collection(payment.node).findAndModify({","            query: {type: \"dividend_pathway\", currency: payment.currency, account: string.tx_json.Destination}, ","            update:{$inc:{total_pathway:-amount}}","            })","            // deduct from tax_blob","            db.collection(account_id).findAndModify({","            query: {type: \"tax_blob\", currency: payment.currency}, ","            update:{$inc:{total_amount:-amount}}","            })","        }","","             })","","        }","        ","        ","    }).listen(8080); console.log(\"server listening on port 8080\");","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":19},"end":{"row":9,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":7},"end":{"row":26,"column":51},"action":"remove","lines":[" var BLOB = JSON.parse(str)","        var ACCOUNT_ID = BLOB[0].account_id","        var WALLET = BLOB[1]","        var COLLECTION = db.collection(ACCOUNT_ID);"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":14,"column":51},"action":"insert","lines":[" var BLOB = JSON.parse(str)","        var ACCOUNT_ID = BLOB[0].account_id","        var WALLET = BLOB[1]","        var COLLECTION = db.collection(ACCOUNT_ID);"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":1},"end":{"row":11,"column":4},"action":"insert","lines":["   "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":4},"end":{"row":11,"column":8},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":0},"end":{"row":17,"column":90},"action":"insert","lines":[" [{\"account_id\":\"rLaKjMvLbrAJwnH4VpawQ6ot9epZqJmbfQ\"},[{\"currency\":\"BTC\",\"taxRate\":0.02}]]"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":0},"end":{"row":36,"column":9},"action":"remove","lines":["","        ","        ","        ","        // update wallet","        COLLECTION.remove({ type: 'wallet' })","        ","        for(var i=0;i<WALLET.length; i++){","        COLLECTION.save({ type: \"wallet\", currency: WALLET[i].currency, taxRate: WALLET[i].taxRate })","        }"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":0},"end":{"row":30,"column":15},"action":"remove","lines":["","               "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":8},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":4},"end":{"row":28,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":0},"end":{"row":28,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":7},"end":{"row":27,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":47},"end":{"row":48,"column":0},"action":"insert","lines":["",""]},{"start":{"row":48,"column":0},"end":{"row":48,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":8},"end":{"row":48,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":9},"end":{"row":48,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":10},"end":{"row":48,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":11},"end":{"row":48,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":12},"end":{"row":48,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":13},"end":{"row":48,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":14},"end":{"row":48,"column":15},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":15},"end":{"row":48,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":16},"end":{"row":48,"column":17},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":17},"end":{"row":48,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":18},"end":{"row":48,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":19},"end":{"row":48,"column":21},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":20},"end":{"row":48,"column":21},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":21},"end":{"row":48,"column":22},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":22},"end":{"row":48,"column":23},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":23},"end":{"row":48,"column":24},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":24},"end":{"row":48,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":25},"end":{"row":48,"column":26},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":26},"end":{"row":48,"column":27},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":28},"end":{"row":49,"column":0},"action":"insert","lines":["",""]},{"start":{"row":49,"column":0},"end":{"row":49,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":8},"end":{"row":49,"column":9},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":9},"end":{"row":49,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":10},"end":{"row":49,"column":11},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":11},"end":{"row":49,"column":13},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":12},"end":{"row":49,"column":13},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":13},"end":{"row":49,"column":14},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":14},"end":{"row":49,"column":15},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":15},"end":{"row":49,"column":16},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":16},"end":{"row":49,"column":17},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":17},"end":{"row":49,"column":18},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":18},"end":{"row":49,"column":19},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":19},"end":{"row":49,"column":20},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":20},"end":{"row":49,"column":21},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":21},"end":{"row":49,"column":22},"action":"insert","lines":["<"]}]}]]},"ace":{"folds":[],"scrolltop":567.5,"scrollleft":0,"selection":{"start":{"row":48,"column":28},"end":{"row":48,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1419093164748,"hash":"15560da4f88c47f2585ba7d0777620e3b780e1dd"}