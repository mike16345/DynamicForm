import { Response } from "express";

export default class BaseController {
  constructor() {
    this.bindMethods();
  }

  private bindMethods() {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach((key) => {
      if (key !== "constructor") {
        this[key] = this[key].bind(this);
      }
    });
  }

  success(res: Response, data: any, message: string = "Success", statusCode: number = 200): any {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  error(res: Response, message: string, statusCode: number = 500): any {
    return res.status(statusCode).json({
      success: false,
      message,
    });
  }
}
