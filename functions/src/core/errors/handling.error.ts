import { Response } from "express";
import ErrorBase from "./base.error";

export const errorHandling = (res: Response, error: ErrorBase) => {
  res.status(error.code).json(error);
};
