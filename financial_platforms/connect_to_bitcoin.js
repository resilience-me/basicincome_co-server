exports.connect = function(db_bitcoin){
    
    
var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();

app.use(bodyParser.json());



app.post('/bitcoin', function (req, res) {
  if (req.body.payload.type == 'address') {
    console.log('address=' + req.body.payload.address + ' ' +
      'transaction=' + req.body.payload.transaction_hash + ' ' +
      'sent=' + req.body.payload.sent + ' ' +
      'received=' + req.body.payload.received + ' ' +
      'confirmations=' + req.body.payload.confirmations);
    res.send('OK\n');
    
  }
});


app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('i am a beautiful butterfly');
});

app.listen(process.env.PORT || 4730,function(){
  console.log("Started on PORT 4730");
})    
    
    
}
