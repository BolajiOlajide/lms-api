import { Router } from 'express';

import router from './index';


const router = Router();

router.route('/')
  .get(function(req, res) {
    Contact
      .fetchAll()
      .then(function(contacts) {
        res.json({ contacts });
      });
  });

export default router;
