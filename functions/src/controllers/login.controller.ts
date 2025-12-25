import { Request, Response } from "express";

import Form, { MoreAction } from "../core/forms/form";
import TextField from "../core/forms/text-field";

export const loginForm = async (req: Request, res: Response) => {
  const form = new Form("LoginForm");

  const emailField = new TextField({
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    value: "",
    keyboardType: "email-address",
  });
  const passwordField = new TextField({
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    value: "",
    secret: true,
  });

  form.data.push(emailField, passwordField);

  const loginActions: MoreAction = {
    name: "login_btn",
    label: "Continue",
    url: "/login",
    method: "POST",
  };

  form.more_actions.push(loginActions);
  return res.status(200).json(form);
};
