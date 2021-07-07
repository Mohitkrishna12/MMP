import express from 'express';

import { createSettings, getSettings} from './controller/settings.js';

const router = express.Router();
import auth from "./middleware/auth.js";

router.get('/', getSettings);
router.post('/',auth,  createSettings);

export default router;