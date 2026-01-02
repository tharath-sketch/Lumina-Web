class ComponentBase<Data> {
  name: string;
  title: string;
  data: Array<Data> = [];

  constructor(name: string, title: string, data: Array<Data>) {
    this.name = name;
    this.title = title;
    this.data = data;
  }
}

export default ComponentBase;
