import FieldBase from "./field.base";

class Form {
  data: Array<FieldBase>;
  name: string;

  constructor(name: string, data: Array<FieldBase> = []) {
    this.name = name;
    this.data = data;
  }
}

export default Form;
