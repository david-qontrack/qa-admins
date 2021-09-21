import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QaAdminApisService {

  constructor() { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QA-Admin-Apis } from '../models/qa-admin-apis.model';

const baseUrl = 'http://localhost:80/api/qa-admin-apis';

@Injectable({
  providedIn: 'root'
})
export class QA-Admin-Apis-Service {

  constructor(private http: HttpClient) { }

  getAll(): Observable<QA-Admin-Apis[]> {
    return this.http.get<QA-Admin-Apis[]>(baseUrl);
  }

  get(id: any): Observable<QA-Admin-Apis> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByAPI-Title(api-title: any): Observable<QA-Admin-Apis[]> {
    return this.http.get<QA-Admin-Apis[]>(`${baseUrl}?title=${title}`);
  }

  findByAPI-Description(api-description: any): Observable<QA-Admin-Apis[]> {
    return this.http.get<QA-Admin-Apis[]>(`${baseUrl}?description=${description}`);
  }

  findByAPI-isPublished(api-description: any): Observable<QA-Admin-Apis[]> {
    return this.http.get<QA-Admin-Apis[]>(`${baseUrl}?isPublished=${isPublished}`);
  }
}