import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private API_BASE_URL = environment.apiBaseUrl;
  fileName: string;

  constructor(private httpClient: HttpClient) { }

  public uploadFile(file: File): Observable<HttpEvent<{}>> {
    const formData = new FormData();
    formData.append('files', file, file.name)
    this.fileName = file.name;
    const options = {
      reportProgress: true,
    };

    const req = new HttpRequest(
      'POST',
      `${this.API_BASE_URL}/uploadfile`,
      formData,
      options
    );
    return this.httpClient.request(req);
  }
}
//https://dev.to/angular/managing-file-uploads-with-ngrx-39ha
