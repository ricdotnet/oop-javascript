import pool from "./mysql.js";

async function executeQuery(sql, params) {
    const connection = await pool();
    await connection.query(sql, params, (err, res) => {
        if(err) throw err;

        console.log(res)
    });
}

export default executeQuery