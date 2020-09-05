const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_Config = require('./config');

let delet = async (input) => {
    const Connection = mysql.createConnection(DB_Config.DB_Config);

    await Connection.connectAsync();
    console.log("connection Successful");

    const sql = "delete userdetails where emailid=?";
    const result = await Connection.queryAsync(sql, [input.emailid]);

    await Connection.end();
    console.log(result);
};

module.exports = { delet }
