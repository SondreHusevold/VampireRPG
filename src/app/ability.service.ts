import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ability } from './Ability';
import { AbilityType } from './AbilityType';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  constructor(private http: HttpClient) { }

	getAbilityType(type: string) {
		return this.http.get('./assets/Abilities/' + type + "/" + type + '.json');
	}

	getAbility(type: string, id: string) {
		return this.http.get('./assets/Abilities/' + type + "/" + id + '.json');
	}
}
