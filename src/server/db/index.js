import * as mysql from 'mysql';
import Images from './images';

export const Connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'app',
  password: 'Meepmeep0',
  database: 'images'
});

export const Query = (query, values) => {
  
  return new Promise((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if(err) return reject(err);
      return resolve(results);
    })
  });

};

export default {
  Images
}