import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestclientService {

  constructor(private http: HttpClient) { }


  getRequest(url: string) {
    return this.http.get(url);
  }

  postRequest(url:string,body:any)
  {
    return this.http.post(url,body);
  }

  putRequest(url:string,body:any)
  {
    return this.http.put(url,body);
  }


}
