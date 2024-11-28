import { Request, Response, Router } from "express";

export const userRoutes = Router();

userRoutes.get("/", (_req: Request, res: Response) => {
  res.json({ message: "User routes working" });
});
