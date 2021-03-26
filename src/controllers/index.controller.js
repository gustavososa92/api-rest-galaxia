const { Pool } = require("pg")

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "",
  database: "galaxy",
  port: "5432",
})

const getClimaDeldia = async (req, res) => {
  const id = req.query.dia
  const response = await pool.query(`SELECT * FROM dias WHERE dia = $1`, [id])
  res.status(200).json(response.rows)
}
module.exports = { getClimaDeldia }
