import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clan } from './Clan';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  constructor(private http: HttpClient) { 

  }

  getClan(id: string) {
  	return this.http.get('./assets/Clans/' + id + "/" + id + '.json');
  }
}
