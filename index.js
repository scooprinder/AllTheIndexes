const axios = require('axios');
const { ethers } = require("ethers");

async function getTimeIndex() {
    const payload = {
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
    
    axios.post("https://api.avax.network/ext/bc/C/rpc", JSON.stringify(payload), {
        headers: {
            'authority' : "api.avax.network",
            'content-type' : 'application/json'
        }
    }).then(res => {
        const result = res.data.result;
        const index = ethers.utils.formatUnits(result,"gwei") / 4.5
        console.log(`Time: ${index} TIME`)
    }).catch(err => console.log(err));
}

async function getKlimaIndex() {
    const payload = {
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
    
    axios.post("https://polygon-rpc.com/", JSON.stringify(payload), {
        headers: {
            'authority' : "polygon-rpc.com",
            'content-type' : 'application/json'
        }
    }).then(res => {
        const result = res.data.result;
        const index = ethers.utils.formatUnits(result,"gwei") 
        console.log(`Klima: ${index} KLIMA`)
    }).catch(err => console.log(err));
}

async function getOhmIndex() {
    const payload = {
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
    
    axios.post("https://api.olympusdao.finance/", JSON.stringify(payload), {
        headers: {
            //'authority' : "polygon-rpc.com",
            'content-type' : 'application/json'
        }
    }).then(res => {
        const result = res.data.result;
        const index = ethers.utils.formatUnits(result,"gwei") 
        console.log(`Ohm: ${index} OHM`)
    }).catch(err => console.log(err));
}

getTimeIndex();
getKlimaIndex();
getOhmIndex();



