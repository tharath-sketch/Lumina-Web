class Component<Data> {
  name: string;
  data: Array<Data> = [];

  constructor(name: string, data: Array<Data>) {
    this.name = name;
    this.data = data;
  }
}

export default Component;
