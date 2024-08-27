import express from "express";
import * as treatsController from "../controller/treats";
const router = express.Router();

router.get("/", treatsController.getTreats);

export default router;
