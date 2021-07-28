import express from 'express';
import mongoose from 'mongoose';

import settingsMessage from '../models/settings.js';
import his_settings from "../models/his_settings.js";
import bfieldMessage from "../models/bfield.js";
import his_bfieldMessages from "../models/his_bfield.js"
import masterdb from "../models/masterdb.js"
import topupMessages from '../models/topup.js'

const router = express.Router();




export const createSettings = async (req, res) => {
    const post = req.body;
    await settingsMessage.deleteMany({});
    const newSettingsMessage = new settingsMessage({ ...post, timeStamp: new Date().toLocaleString() })
    const updhis_setting= new his_settings({ ...post, timeStamp: new Date().toLocaleString() })

    try {
        await newSettingsMessage.save();
        await updhis_setting.save();
        res.status(201).json(newSettingsMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
        
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

export const createBfield = async (req, res) => {
    const post = req.body;
    await bfieldMessage.deleteMany({});
    const new_hisBfieldMessage = new his_bfieldMessages({ ...post, timeStamp: new Date().toLocaleString() })
    const newBfieldMessage= new bfieldMessage({ ...post, timeStamp: new Date().toLocaleString() })

    try {
        await newBfieldMessage.save();
        await new_hisBfieldMessage.save();
        res.status(201).json(newBfieldMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
}

export const getBfield = async (req, res) => { 
    try {
        const bfieldMessages = await bfieldMessage.find({}).sort({_id:-1}).limit(1);
        res.status(200).json(bfieldMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMasterdb = async (req, res) => { 
    try {
        const newOptions = await masterdb.find({}).sort({_id:-1}).limit(1);
        res.status(200).json(newOptions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTopup = async (req, res) => {
    const post = req.body;
    const filter=post.source;
    const new_topupMessage ={ ...post, timeStamp: new Date().toLocaleString() };
   
    try {
        
        await topupMessages.findOneAndUpdate(filter, new_topupMessage);
        res.status(201).json(new_topupMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
}

export const getTopup = async (req, res) => { 
    try {
        const newOptions = await topupMessages.find({});
        res.status(200).json(newOptions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export default router;