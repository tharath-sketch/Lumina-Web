import { Request, Response } from "express";

import StatusCard from "../core/statusCard";

export const getDashboard = (req: Request, res: Response) => {
  const statCards = new StatusCard("StatusCard", [
    {
      label: "GPA",
      value: "3.85",
      color: "#6366F1",
    },
    {
      label: "ATTEND",
      value: "94%",
      color: "#10B981",
    },
    {
      label: "CREDITS",
      value: "12",
      color: "#F59E0B",
    },
  ]);

  return res.status(200).json([statCards]);
};
