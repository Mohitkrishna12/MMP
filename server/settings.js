import express from 'express';

import { createSettings, getSettings,createBfield, getBfield} from './controller/settings.js';

const router = express.Router();
import auth from "./middleware/auth.js";

router.get('/', getSettings);
router.post('/',auth,  createSettings);
router.post('/Bfield',createBfield);
router.get('/Bfield',getBfield);

export default router;