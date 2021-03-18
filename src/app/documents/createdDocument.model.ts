export class CreatedDocument {
  public _id?: string;
  public workerId: string;
  public templateId: string;
  public fileName: string;


  constructor(id: string, workerId: string, templateId: string, fileName: string) {
    this._id = id;
    this.workerId = workerId;
    this.templateId = templateId;
    this.fileName = fileName;
  }
}
