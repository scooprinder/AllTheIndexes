function TIME_INDEX() {
   var payload = {
        method:"eth_call",
        params:[
            {
                to:"0x4456b87af11e87e329ab7d7c7a246ed1ac2168b9",
                data:"0x2986c0e5"
            },
            "latest"
        ],
        id:104,
        jsonrpc:"2.0"
    }
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    'authority' : 'api.avax.network',
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(payload)
  };
  var res = UrlFetchApp.fetch('https://api.avax.network/ext/bc/C/rpc', options);
  Logger.log(res.getContentText());

  var obj = JSON.parse(res.getContentText());
  var bigInt = BigInt(obj.result)
  var result = Number(bigInt)
  var short = result / 10**9
  return short
}