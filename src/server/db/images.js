import { Query } from './index';

const all = async () => Query('SELECT * FROM images');
const one = async (id) => Query('SELECT * FROM images WHERE id = ?', [id])

export default {
  all,
  one
}