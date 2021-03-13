export class Document {
  public _id?: string;
  public name: string;
  public version: number;
  public description: string;

  constructor(id: string, name: string, version: number, description: string) {
    this._id = id;
    this.name = name;
    this.version = version;
    this.description = description;
  }
}
