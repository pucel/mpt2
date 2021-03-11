export class Worker {
  public _id?: string;
  public firstName: string;
  public lastName: string;

  constructor(id: string, firstName: string, lastName: string) {
    this._id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
