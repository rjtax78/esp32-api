import pg from 'pg'

const Pool = pg.Pool

const connectDb = new Pool({
  user: "postgres",
  host: "db.ekaferyxhpjbxgfqpgdu.supabase.co",
  database: "postgres",
  password: "esp32-node",
  port: 5432,
});
export default connectDb
