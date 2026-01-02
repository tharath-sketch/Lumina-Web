class ErrorBase extends Error {
  code: number;
  title: string;
  description: string;

  constructor(code: number, title: string, description: string) {
    super(title);
    this.code = code;
    this.title = title;
    this.description = description;
  }

  toJSON = () => {
    return {
      code: this.code,
      title: this.title,
      description: this.description,
    };
  };
}

export default ErrorBase;
