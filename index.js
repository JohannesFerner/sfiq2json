require('dotenv').config();
let SalesforceIQ = require('salesforceiq');

console.log("APIKEY = " + process.env.APIKEY + "\nAPISECRET: " + process.env.APISECRET);

let client = new SalesforceIQ(process.env.APIKEY, process.env.APISECRET);

// let accounts = client.getAccounts((err, res) => {
//     console.log('accounts:', res);
// });
//
// let contacts = client.getAccounts((err, res) => {
//     console.log('getContacts:', res);
// });
//
// let lists = client.getLists((err, res) => {
//     console.log('getLists:', res);
// });

let portfolio = client.getList("55b0d537e4b02701a0ec9842", (err, res) => {
    console.log('Portfolio:', res);
});

let portfolioEntries = client.getListItems("55b0d537e4b02701a0ec9842", "_start=5&limit=10\r\n", (err, res) => {
    console.log('Portfolio:', res);
});
