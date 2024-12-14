import connectDb from "../config/db.js";
export const ledOff = async (req, res, next) => {
  try {
    await connectDb.query("INSERT INTO led_logs (action) VALUES ('OFF')");
    res.status(200).send({ message: 'LED éteinte et log sauvegardé !' });
  } catch (err) {
    res.status(500).send(err);
  }
};
export const ledOn = async (req, res, next) => {
  try {
    await connectDb.query("INSERT INTO led_logs (action) VALUES ('ON')");
    res.status(200).send({ message: 'LED allumée et log sauvegardé !' });
  } catch (err) {
    res.status(500).send(err);
  }
};
export const ledLogs = async (req, res, next) => {
  try {
    const result = await connectDb.query('SELECT * FROM led_logs ORDER BY timestamp DESC');
    res.status(200).send(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
}
