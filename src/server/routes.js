import * as express from 'express';

import db from './db';

const router = express.Router();

router.get('/api/images', async (req, res) => {
  try {
    res.json(await db.Images.all())
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
})

router.get('/api/images/:id', async (req, res) => {
  try {
    res.json((await db.Images.one(req.params.id))[0])
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
})

export default router;