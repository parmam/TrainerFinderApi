import { Router } from "express";
import { authRoutes } from "@routes/auth.routes";
import { healthRoutes } from "@routes/health.routes";
import { userRoutes } from "@routes/user.routes";

export const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/users", userRoutes);
routes.use("/health", healthRoutes);

export * from "./auth.routes";
export * from "./health.routes";
export * from "./user.routes";
