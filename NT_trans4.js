const pool =  require("./db");

const sql = 'UPDATE "PrelimExam"."NT_supplier" SET supplier_id = $1 WHERE supplier_id = $1 RETURNING *'; 
//UPDATE "PrelimExam"."NT_customer"
	//SET customer_id=?, customer_name=?
	//WHERE <condition>;

const data = [111]

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});