import BaseError from "./base.error";

class AuthenticationError extends BaseError {
  constructor(title: string = "Error 401", description: string) {
    super(401, title, description);
  }
}

export default AuthenticationError;
