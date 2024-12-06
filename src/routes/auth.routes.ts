import { Router } from "express";
import { AuthController } from "@controllers/auth.controller";
import { AuthService } from "@services/auth.service";
import { isAuthenticated } from "@middlewares/auth.middleware";
export const authRoutes = Router();

// Initialize dependencies
const authService = new AuthService();
const authController = new AuthController(authService);

// Middleware to protect routes
const requireAuth = isAuthenticated();

// Public routes

authRoutes.post("/sign-up", (req, res) => authController.signUp(req, res));
authRoutes.post("/verify-email", (req, res) =>
  authController.verifyEmail(req, res)
);
authRoutes.post("/sign-in", (req, res) => authController.signIn(req, res));

// Protected routes

authRoutes.post("/sign-out", requireAuth, (req, res) =>
  authController.signOut(req, res)
);
