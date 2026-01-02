import { Request, Response } from "express";

import StatusCard from "../core/status-card.component";
import ScheduleCard from "../core/schedule-card.component";

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

  const scheduleCards = new ScheduleCard("Today's Schedule", [
    {
      subject: "Advanced Mathematics",
      location: "Hall A-12",
      time: "09:00 AM",
      color: "#10B981",
      icon: "Check",
      active: "N",
    },
    {
      subject: "Computer Science II",
      location: "Lab 04",
      time: "11:30 AM",
      color: "#6366F1",
      icon: "CirclePlay",
      active: "Y",
    },
    {
      subject: "English Literature",
      location: "Lab 04",
      time: "02:00 PM",
      color: "",
      icon: "Clock4",
      active: "N",
    },
    {
      subject: "Physics Workshop",
      location: "Science Wing",
      time: "04:15 PM",
      color: "",
      icon: "Clock4",
      active: "N",
    },
  ]);

  scheduleCards.more_actions.push({
    label: "VIEW ALL",
  });

  return res.status(200).json([statCards, scheduleCards]);
};
