const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_Config = require('./config');


let update = async (input) => {
    const Connection = mysql.createConnection(DB_Config.DB_Config);

    await Connection.connectAsync();
    console.log("Connection Successful");

    const sql = "update userdetails set password=? where emailid=?";
    const result = await Connection.queryAsync(sql, [
        input.password,
        input.emailid
    ]);
    await Connection.end();
    console.log(result);

    // if (result.length > 0) {
    //     throw new Error("Invalid Emailid")
    // }
};

module.exports = { update }