{"filter":false,"title":"find_highest_accumulated_dividend.js","tooltip":"/find_highest_accumulated_dividend.js","undoManager":{"mark":50,"position":50,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":50,"column":0},"action":"insert","lines":["function find_highest_accumulated_dividend(linez){","    ","","var lines = linez","var highest_accumulated_dividend = {\"account\": \"\", \"accumulated_amount\": \"\"}","","var i = 0","loop(lines)","    function loop(lines){","","    var account_in_lines = lines[i].account","","          // upsert safety net (sum of all safety_net_pathways)","    db.collection(lines[i].account).findOne({","        query: {type: \"accumulated_dividends\", currency: \"RES\"}","","        ","    }, ","        function(err,doc){","            console.log(doc)","","// filter out highest accumulated ammount (Optimization Layer)","            if (highest_accumulated_dividend.accumulated_amount < doc.accumulated_amount){","                ","                console.log(account_in_lines + \" \" +address)","            highest_accumulated_dividend = {\"account\": account_in_lines, \"accumulated_amount\": doc.accumulated_amount}","            ","            ","            ","            ","            }","            ","        i++","","    if(i<lines.length){","        loop(lines)","    }","    else{","        console.log(JSON.stringify(highest_accumulated_dividend))","        conn.sendText(JSON.stringify(highest_accumulated_dividend));","    } ","            ","        })","    ","","","    }","    ","    ","}",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":8},"action":"remove","lines":["function"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":41},"end":{"row":0,"column":42},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":42},"end":{"row":0,"column":43},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":43},"end":{"row":0,"column":44},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":44},"end":{"row":0,"column":45},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":45},"end":{"row":0,"column":46},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":46},"end":{"row":0,"column":47},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":47},"end":{"row":0,"column":48},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":48},"end":{"row":0,"column":49},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":49},"end":{"row":0,"column":50},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":50},"end":{"row":0,"column":51},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":51},"end":{"row":0,"column":52},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["","","/*loading mongodb*/    ","var mongojs = require(\"mongojs\")","var db = mongojs(\"mongodb://guest:guest@ds049150.mongolab.com:49150/basicincome_co\");   ","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":8},"end":{"row":47,"column":21},"action":"remove","lines":["conn.sendText"]},{"start":{"row":47,"column":8},"end":{"row":47,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":9},"end":{"row":47,"column":10},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":10},"end":{"row":47,"column":11},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":11},"end":{"row":47,"column":12},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":12},"end":{"row":47,"column":13},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":13},"end":{"row":47,"column":14},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":14},"end":{"row":47,"column":15},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":15},"end":{"row":47,"column":16},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":58},"end":{"row":8,"column":59},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":59},"end":{"row":8,"column":60},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":60},"end":{"row":8,"column":61},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":61},"end":{"row":8,"column":62},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":62},"end":{"row":8,"column":63},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":63},"end":{"row":8,"column":64},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":64},"end":{"row":8,"column":65},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":65},"end":{"row":8,"column":66},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":66},"end":{"row":8,"column":67},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":66},"end":{"row":8,"column":67},"action":"remove","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":65},"end":{"row":8,"column":66},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":64},"end":{"row":8,"column":65},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":63},"end":{"row":8,"column":64},"action":"remove","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":63},"end":{"row":8,"column":64},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":64},"end":{"row":8,"column":65},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":65},"end":{"row":8,"column":66},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":66},"end":{"row":8,"column":67},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":67},"end":{"row":8,"column":68},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":14},"end":{"row":32,"column":60},"action":"remove","lines":["  console.log(account_in_lines + \" \" +address)"]}]}]]},"ace":{"folds":[],"scrolltop":675,"scrollleft":0,"selection":{"start":{"row":32,"column":14},"end":{"row":32,"column":14},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":41,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1428442916309,"hash":"e7f8eb1cbe1cf7796ce941a21c097023b7a297e4"}