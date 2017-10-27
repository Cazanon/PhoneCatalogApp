import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from '../../models/phone.model';

@Injectable()
export class PhonesService {

  constructor(private http: HttpClient) { }

  public getPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>('http://localhost:3000/phones');
  }

}
