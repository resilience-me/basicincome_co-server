{"changed":true,"filter":false,"title":"connect_to_ripple.js","tooltip":"/connect_to_ripple.js","value":"\n// ----- STANDARDIZED SCRIPT -----\n// add your financial platform here, here's code for Ripple\nfunction connect_financial_platform(){\n    \n    /* Loading ripple-lib with Node.js */\nvar ripple = require('ripple-lib')\nvar Remote = ripple.Remote;\n\n\nvar remote = new Remote({\n  // see the API Reference for available options\n  servers: [ 'wss://s1.ripple.com:443' ]\n});\n\nremote.connect(function() {\n    console.log(\"connected to Ripple\")\n  /* remote connected */\n\n});//end remote connect\n\n}","undoManager":{"mark":-1,"position":2,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":["    /* Loading ripple-lib with Node.js */","var ripple = require('ripple-lib')","var Remote = ripple.Remote;","","","var remote = new Remote({","  // see the API Reference for available options","  servers: [ 'wss://s1.ripple.com:443' ]","});","","remote.connect(function() {","    console.log(\"connected to Ripple\")","  /* remote connected */","","});//end remote connect","","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":16,"column":1},"action":"remove","lines":["    /* Loading ripple-lib with Node.js */","var ripple = require('ripple-lib')","var Remote = ripple.Remote;","","","var remote = new Remote({","  // see the API Reference for available options","  servers: [ 'wss://s1.ripple.com:443' ]","});","","remote.connect(function() {","    console.log(\"connected to Ripple\")","  /* remote connected */","","});//end remote connect","","}"]},{"start":{"row":0,"column":0},"end":{"row":22,"column":28},"action":"insert","lines":["","// ----- STANDARDIZED SCRIPT -----","// add your financial platform here, here's code for Ripple","function connect_financial_platform(){","    ","    /* Loading ripple-lib with Node.js */","var ripple = require('ripple-lib')","var Remote = ripple.Remote;","","","var remote = new Remote({","  // see the API Reference for available options","  servers: [ 'wss://s1.ripple.com:443' ]","});","","remote.connect(function() {","    console.log(\"connected to Ripple\")","  /* remote connected */","","});//end remote connect","","}","connect_financial_platform()"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":1},"end":{"row":22,"column":28},"action":"remove","lines":["","connect_financial_platform()"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":1},"end":{"row":21,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1427853383336}