import express from "express";
import { scanRoutees } from "./routes/scan.routes"
import {healtCheckRoutes} from "./routes/healthcheck.routes"
import cors from "cors";
import ip from 'ip';
//import { balanceRoutes } from "./routes/balance.routes";
//import { playerRoutes } from "./routes/player.routes";
//import ip from 'ip';
//import { playerLogin } from "./controller/playerController";
//import { connectToDatabase } from "./database/config";

const app = express()
const port = 8080;;
const urlPath = '/scan';


app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(urlPath, scanRoutees);          
app.use(urlPath, healtCheckRoutes);          


   // Start With IP
   app.listen(port, ip.address(), () => {
       console.log(`Server started at http://${ip.address()}:${port}`);
});