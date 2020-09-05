const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());//allowing access::unblocking cors policy
app.use(express.urlencoded({ extended: true }));//parsed urlencoded data
app.use(express.json());//parsed row data::json



const dbadd = require("./adduser");
const readdata = require("./readdata");
const update = require('./update');
const delet = require('./delete');

//Connection Checking
// app.get('/readdata', async (req, res) => {


// });

// data Registration
app.post('/adduser', async (req, res) => {
    try {

        const input = req.body;

        await dbadd.adduser(input);
        res.json({ message: "Success" });
    } catch (err) {
        res.json({ message: "failed", err });
    }
});

//User Login 
app.post('/login', async (req, res) => {
    try {
        const input = req.body;

        await readdata.readdata(input);
        res.json({ res: true });
    } catch (err) {
        res.json({ res: false });
    }
});


//Update password ::Forgot password
app.put('/update', async (req, res) => {
    try {
        const input = req.body;

        await update.update(input);
        res.json({ res: true });
    } catch (err) {
        res.json({ res: false });
    }
});

//Delete entry
app.delete('/delete', async (req, res) => {
    try {
        const input = req.body;

        await delet.delet(input);
        res.json({ res: true })
    } catch (err) {
        res.json({ res: false })
    }
});


// app.get('/readdata', async (req, res) => {
//     const input = req.query;

// });


// event details
app.post('/addevent', async (req, res) => {
    try {

        const input = req.body;

        await dbadd.addevent(input);
        res.json({ message: "Success" });
    } catch (err) {
        res.json({ message: "failed", err });
        console.log(err);
    }
});
// payment deatils
app.post('/payment', async (req, res) => {
    try {

        const input = req.body;

        await dbadd.addpayment(input);
        res.json({ message: "Success" });
    } catch (err) {
        res.json({ message: "failed", err });
        console.log(err);
    }
});
app.listen(2000);