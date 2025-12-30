import { Response } from "express";
import BaseError from "./base.error";

export const errorHandling = (res: Response, error: BaseError) => {
  res.status(error.code).json(error);
};
