import { Request, Response, NextFunction } from "express";
import * as admin from "firebase-admin";
import AuthenticationError from "../core/errors/auth.error";
import { errorHandling } from "../core/errors/handling.error";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  try {
    if (!authHeader?.startsWith("Bearer ")) {
      throw new AuthenticationError(undefined, "Authentication failed.");
    }

    const idToken = authHeader.split("Bearer ")[1];

    await admin.auth().verifyIdToken(idToken);

    return next();
  } catch (error) {
    console.error("🚀 ~ authMiddleware ~ error:", error);
    errorHandling(
      res,
      new AuthenticationError(undefined, "Authentication failed.")
    );
  }
};
