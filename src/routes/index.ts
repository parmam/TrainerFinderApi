import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { healthRoutes } from "./health.routes";
import { userRoutes } from "./user.routes";

export const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/users", userRoutes);
routes.use("/health", healthRoutes);

export * from "./auth.routes";
export * from "./health.routes";
export * from "./user.routes";
