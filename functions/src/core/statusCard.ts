import Component from "./component.base";

export type StatusCardType = {
  color: string;
  label: string;
  value: string;
};

class StatusCard extends Component<StatusCardType> {
  constructor(data: Array<StatusCardType> = []) {
    super("StatusCard", data);
  }
}

export default StatusCard;
