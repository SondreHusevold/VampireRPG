import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterAttribute } from './CharacterAttribute';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  constructor(private http: HttpClient) { }

	getCharAttribute(id: string) {
  		return this.http.get('./assets/Attributes/' + id + '.json');
	}
}
