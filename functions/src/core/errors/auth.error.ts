import ErrorBase from "./base.error";

class AuthenticationError extends ErrorBase {
  constructor(title: string = "Error 401", description: string) {
    super(401, title, description);
  }
}

export default AuthenticationError;
