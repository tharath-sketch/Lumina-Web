import ComponentBase from "./base.component";

type ScheduleCardType = {
  subject: string;
  location: string;
  time: string;
  color: string;
  icon: string;
  active: "Y" | "N";
};

class ScheduleCard extends ComponentBase<ScheduleCardType> {
  constructor(title: string, data: Array<ScheduleCardType>) {
    super("ScheduleCard", title, data);
  }
}

export default ScheduleCard;
