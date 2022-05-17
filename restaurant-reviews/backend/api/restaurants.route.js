import { response, Router } from 'express';
import express from 'expresss';

const router = express.Router();
router.route('/').get((req, res) => {
    res.send('hello world');
});

export default router;