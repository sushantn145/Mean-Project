const Promise = require('bluebird');
const mysql = require('mysql');


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const DB_Config = require('./config');


let adduser = async (input) => {
    const Connection = mysql.createConnection(DB_Config.DB_Config);

    await Connection.connectAsync();
    console.log("Connection Successful");

    const sql = "insert into userdetails (firstname,lastname,emailid,password,mobno) values (?,?,?,?,?)";
    const result = await Connection.queryAsync(sql, [
        input.firstname,
        input.lastname,
        input.emailid,
        input.password,
        input.mobno,
    ])

    await Connection.endAsync();
    console.log(result)
};

let addevent = async (input) => {
    const Connection = mysql.createConnection(DB_Config.DB_Config);

    await Connection.connectAsync();
    console.log("Connection Successful");

    const sql = "insert into eventdetails (eventname,eventstartdate,eventenddate,eventreq,guest,location) values (?,?,?,?,?,?)";
    const result = await Connection.queryAsync(sql, [
        input.eventname,
        input.eventstartdate,
        input.eventenddate,
        input.eventreq,
        input.guest,
        input.location
    ])

    await Connection.endAsync();
    console.log(result)
};

let addpayment = async (input) => {
    const Connection = mysql.createConnection(DB_Config.DB_Config);

    await Connection.connectAsync();
    console.log("Connection Successful");

    const sql = "insert into paymemtdetails (name) values (?)";
    const result = await Connection.queryAsync(sql, [
        input.name
    ])

    await Connection.endAsync();
    console.log(result)
};
module.exports = { adduser, addevent, addpayment }