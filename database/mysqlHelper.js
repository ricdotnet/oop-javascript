import pool from "./mysql.js";

async function executeQuery(sql, params) {
    const connection = await pool();

    connection.getConnection((error, con) => {
        if(error) throw error;

        con.query(sql, params, (err, res) => {
            con.release();

            if(err) throw err;
        });
    })
}

export default executeQuery