import { Response } from "express";

export default class BaseController {
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
