const pool =  require("./db");

//const sql = 'INSERT INTO "PrelimExam"."NT_supplier"(supplier_id, supplier_name) VALUES ($1, $2) RETURNING *';
//const sql = 'INSERT INTO "PrelimExam"."NT_customer"(customer_id, customer_name) VALUES ($1, $2) RETURNING *';
const sql = 'INSERT INTO "PrelimExam"."NT_product"(product_name, supplier_id) VALUES ($1, $2) RETURNING *';


const data = ['CPU', 321];


pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});

pool.end();