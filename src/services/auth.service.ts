interface SignUpData {
  email: string;
  firstName: string;
  lastName: string;
}

interface SignInData {
  email: string;
}

interface VerifyEmailData {
  email: string;
}

export class AuthService {
  async signUp(data: SignUpData) {
    console.log("Signing up user:", data);
    return { message: "User created successfully" };
  }

  async signIn(data: SignInData) {
    console.log("Signing in user:", data);
    return { message: "Signed in successfully" };
  }

  async verifyEmail(data: VerifyEmailData) {
    console.log("Verifying email:", data);
    return { message: "Email verified successfully" };
  }

  async signOut(sessionId: string) {
    console.log("Signing out session:", sessionId);
    return { message: "Signed out successfully" };
  }
}
