import FieldBase, { FieldData } from "./field.base";

class TextField extends FieldBase {
  constructor(data: FieldData) {
    super("TextField", data);
  }
}

export default TextField;
