const pool =  require("./db");

const sql = 'INSERT INTO "PrelimExam"."NT_PurchaseOrder"(PurchaseOrder_id, supplier_id, customer_id) VALUES ($1, $2, $3) RETURNING *';

const data = [ 78945 , 123, 347];


pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});

pool.end();