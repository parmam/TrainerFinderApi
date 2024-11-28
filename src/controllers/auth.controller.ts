import { Request, Response } from "express";
import { AuthService } from "../services";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async signUp(req: Request, res: Response) {
    try {
      const result = await this.authService.signUp(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error("Sign up error:", error);
      res.status(500).json({ error: "Error creating user" });
    }
  }

  async signIn(req: Request, res: Response) {
    try {
      const result = await this.authService.signIn(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Error signing in" });
    }
  }

  async verifyEmail(req: Request, res: Response) {
    try {
      const result = await this.authService.verifyEmail(req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Error verifying email" });
    }
  }

  async signOut(req: Request, res: Response) {
    try {
      if (!req.auth?.sessionId) {
        throw new Error("No session found");
      }
      const result = await this.authService.signOut(req.auth.sessionId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Error signing out" });
    }
  }
}
