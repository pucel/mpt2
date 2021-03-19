export class CreatedDocument {
  public _id?: string;
  public workerId: string;
  public templateId: string;
  public filename: string;


  constructor(id: string, workerId: string, templateId: string, filename: string) {
    this._id = id;
    this.workerId = workerId;
    this.templateId = templateId;
    this.filename = filename;
  }
}
