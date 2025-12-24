export type FieldData = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  icon?: string;
  secret?: boolean;
  required?: boolean;
};

class FieldBase {
  name: string;
  data: FieldData;

  constructor(name: string, data: FieldData) {
    this.name = name;
    this.data = data;
  }
}

export default FieldBase;
