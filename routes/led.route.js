import express from "express";
import { ledOff, ledOn, ledLogs } from "../controllers/led.controller.js";
const ledRoute = express.Router();

ledRoute.route("/on").post(ledOn);
ledRoute.route("/off").post(ledOff);
ledRoute.route("/logs").get(ledLogs);

export default ledRoute;
