import Component from "./base.component";

export type StatusCardType = {
  color: string;
  label: string;
  value: string;
};

class StatusCard extends Component<StatusCardType> {
  constructor(title: string, data: Array<StatusCardType> = []) {
    super("StatusCard", title, data);
  }
}

export default StatusCard;
