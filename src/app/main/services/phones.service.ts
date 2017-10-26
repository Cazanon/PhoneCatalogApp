import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhonesService {

  constructor(private http: HttpClient) { }

  public getPhones(): Observable<any> {
    return this.http.get('http://localhost:3000/phones');
  }

}
