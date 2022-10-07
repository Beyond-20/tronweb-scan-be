import express from "express"
import { ScanLatestTX } from "../controller/scanController";

export const scanRoutees = express.Router();
scanRoutees.use(express.json());

scanRoutees.post('/scantx',  ScanLatestTX);
