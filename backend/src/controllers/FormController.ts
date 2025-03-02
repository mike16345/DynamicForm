import { Request, Response } from "express";
import FormService from "../services/FormService";
import BaseController from "./BaseController";

export default class FormController extends BaseController {
  constructor() {
    super();
  }

  async createForm(req: Request, res: Response) {
    try {
      const formToAdd = req.body;
      const response = await new FormService().createForm(formToAdd);

      return this.success(res, response, "Form added successfully!");
    } catch (e: any) {
      return this.error(res, e.message);
    }
  }

  async getForms(req: Request, res: Response) {
    try {
      const response = await new FormService().getForms();

      return this.success(res, response);
    } catch (e: any) {
      return this.error(res, e);
    }
  }
}
