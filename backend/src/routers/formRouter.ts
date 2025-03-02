import { Router } from "express";
import FormController from "../controllers/FormController";

const router = Router();

const formController = new FormController();

router.get("/all", formController.getForms);

router.post("/create", formController.createForm);

export default router;
