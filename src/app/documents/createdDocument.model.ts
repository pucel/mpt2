export interface CreatedDocument {
  _id?: string;
  workerId: string;
  templateId: string;
  filename: string;
  name: string;
  version: number;
  description: string;
  fileDoc: string;
  filePdf: string;
}
