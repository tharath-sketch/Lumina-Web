import { Request, Response } from "express";
import Form from "../core/forms/form";
import TextField from "../core/forms/text-field";

export const loginForm = async (req: Request, res: Response) => {
  const form = new Form("LoginForm");

  const emailField = new TextField({
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    value: "",
  });
  const passwordField = new TextField({
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    value: "",
  });

  form.data.push(emailField, passwordField);
  return res.status(200).json(form);
};
