import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";
import { healthRoutes } from "./health.routes";
import { paymentRoutes } from "./payment.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/health", healthRoutes);
router.use("/payments", paymentRoutes);

export { router as routes };
