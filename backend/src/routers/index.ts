import { Router } from "express";
import formRouter from "./formRouter";

const router = Router();

router.use("/forms", formRouter);

export default router;
