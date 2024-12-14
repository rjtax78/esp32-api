import pg from 'pg'

const Pool = pg.Pool

const connectDb = new Pool({
  user: 'postgres',
  host: 'db.ekaferyxhpjbxgfqpgdu.supabase.co',  // Adresse IPv4 au lieu d'IPv6
  database: 'postgres',
  password: 'esp32-node',
  port: 5432,
});
export default connectDb
