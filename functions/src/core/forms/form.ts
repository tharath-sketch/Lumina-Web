import { Method } from "axios";
import FieldBase from "./base.field";

export type MoreAction = {
  name: string;
  label: string;
  url: string;
  method: Method;
};

class Form {
  data: Array<FieldBase>;
  name: string;
  more_actions: Array<MoreAction>;

  constructor(
    name: string,
    data: Array<FieldBase> = [],
    moreActions: Array<MoreAction> = []
  ) {
    this.name = name;
    this.data = data;
    this.more_actions = moreActions;
  }
}

export default Form;
