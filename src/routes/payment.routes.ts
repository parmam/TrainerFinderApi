import { Router } from "express";
import {
  createPaymentIntent,
  configurePayment,
} from "../controllers/payment.controller";
import { isAuthenticated } from "../middlewares/auth.middleware";

export const paymentRoutes = Router();

// Get Stripe configuration (publishable key and other public configs)
paymentRoutes.get("/config", configurePayment);

// Create a payment intent
paymentRoutes.post(
  "/create-payment-intent",
  isAuthenticated,
  createPaymentIntent
);
