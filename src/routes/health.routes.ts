import { Request, Response, Router } from "express";

export const healthRoutes = Router();

healthRoutes.get("/", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});
