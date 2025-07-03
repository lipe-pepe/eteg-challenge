import { Router } from "express";
import { postClient } from "../controllers/clientsController";

const router = Router();

router.post("/", postClient);

export default router;
