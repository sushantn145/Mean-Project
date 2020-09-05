const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_Config = require('./config');

let readdata = async (input) => {
    const Connection = mysql.createConnection(DB_Config.DB_Config);

    await Connection.connectAsync();
    console.log('Connection Successful');

    const sql = "select emailid,password from userdetails where emailid=? and password=?";
    const result = await Connection.queryAsync(sql, [input.emailid, input.password]);

    await Connection.end();
    console.log(result);
    if (result.length == 0) {
        throw new Error("Invalid Username and Password")
    }
};


module.exports = { readdata }
