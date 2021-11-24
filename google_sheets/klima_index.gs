function KLIMA_INDEX() {
   var payload = {
        method:"eth_call",
        params:[
            {
                to:"0xb0c22d8d350c67420f06f48936654f567c73e8c8",
                data:"0x70a08231000000000000000000000000693ad12dba5f6e07de86faa21098b691f60a1bea"
            },
            "latest"
        ],
        id:69,
        jsonrpc:"2.0"
    }
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    'authority' : 'polygon-rpc.com',
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(payload)
  };
  var res = UrlFetchApp.fetch('https://polygon-rpc.com/', options);
  Logger.log(res.getContentText());

  var obj = JSON.parse(res.getContentText());
  var bigInt = BigInt(obj.result)
  var result = Number(bigInt)
  var short = result / 10**9
  return short
}