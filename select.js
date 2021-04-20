const pool = require("./db");

pool.query('SELECT * FROM "PrelimExam"."NT_PurchaseOrder"', (err, res)  => {
    try { 
        console.log(res.rows);
    } catch (err) {
        console.log(err.message);
    }
});

pool.end();