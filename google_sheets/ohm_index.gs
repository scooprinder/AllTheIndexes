function OHM_INDEX() {
  var payload = {
        method:"eth_call",
        params:[
            {
                to:"0xfd31c7d00ca47653c6ce64af53c1571f9c36566a",
                data:"0x2986c0e5"
            },
            "latest"
        ],
        id:69,
        jsonrpc:"2.0"
    }
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(payload)
  };
  var res = UrlFetchApp.fetch('https://api.olympusdao.finance/', options);
  Logger.log(res.getContentText());

  var obj = JSON.parse(res.getContentText());
  var bigInt = BigInt(obj.result)
  var result = Number(bigInt)
  var short = result / 10**9
  return short
}