

 
var ripple = require('ripple-lib')

var remote = new ripple.Remote({
  // see the API Reference for available options
  servers: [ 'wss://s1.ripple.com:443' ]
});

remote.connect(function() {
  /* remote connected */
  remote.requestServerInfo(function(err, info) {
    // process err and info
  });
});



   function send_payment(ACCOUNT_ID, SECRET, destination, amount, currency){

    remote.setSecret(ACCOUNT_ID, SECRET);
    var transaction = remote.createTransaction('Payment', {
      account: ACCOUNT_ID,
      destination: destination,
      amount: {currency: currency, value: String(amount), issuer: ACCOUNT_ID}
    });
    transaction.on('resubmitted', function() {
    });
    transaction.submit(function(err, res) {
         if (err){
        console.log(err) 
         }
         else console.log(res);
    });
}//end send_payment()  



exports.send_payment = send_payment;