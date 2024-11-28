import { Request, Response, NextFunction } from "express";

export const isAuthenticated = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.auth?.userId) {
        throw new Error("Unauthorized");
      }
      next();
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  };
};
