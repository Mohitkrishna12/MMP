import express from 'express';
import mongoose from 'mongoose';

import settingsMessage from '../models/settings.js';
import his_settings from "../models/his_settings.js";

const router = express.Router();




export const createSettings = async (req, res) => {
    const post = req.body;
    await settingsMessage.deleteMany({});
    const newSettingsMessage = new settingsMessage({ ...post, createdAt: new Date().toLocaleString() })
    const updhis_setting= new his_settings({ ...post, createdAt: new Date().toLocaleString() })

    try {
        await newSettingsMessage.save();
        await updhis_setting.save();
        res.status(201).json(newSettingsMessage );
        console.log(res.statusCode)
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(res.statusCode)
    }
}

export const getSettings = async (req, res) => { 
    try {
        const settingsMessages = await settingsMessage.find({}).sort({_id:-1}).limit(1);
        res.status(200).json(settingsMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export default router;