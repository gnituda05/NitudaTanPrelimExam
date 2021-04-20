const pool =  require("./db");

const sql = 'DELETE FROM "PrelimExam"."NT_PurchaseOrder" WHERE purchaseorder_id = $1 RETURNING *';
const data = [125]

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});