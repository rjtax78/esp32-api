import pg from 'pg'

const Pool = pg.Pool

const connectionString =
  "postgresql://postgres:esp32-node@db.ekaferyxhpjbxgfqpgdu.supabase.co:5432/postgres";

const connectDb = new Pool({
  connectionString,
});

export default connectDb
