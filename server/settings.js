import express from 'express';

import { createSettings, getSettings,createBfield, getBfield, getMasterdb, createTopup, getTopup} from './controller/settings.js';

const router = express.Router();
import auth from "./middleware/auth.js";

router.get('/', getSettings);
router.post('/',auth,  createSettings);
router.post('/Bfield',createBfield);
router.post('/Topup',createTopup);
router.get('/Bfield',getBfield);
router.get('/Bfield/db',getMasterdb);
router.get('/Topup/db',getTopup);

export default router;