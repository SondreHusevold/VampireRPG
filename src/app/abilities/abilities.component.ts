import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { AbilityService }  from '../ability.service';
import { Ability } from '../Ability';
import { AbilityType } from '../AbilityType';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
	selectedAbility: Ability;
	abilityId: string;
	abilityType: AbilityType;
	abilityTypeId: string;

  constructor(private route: ActivatedRoute,
		private abilityService: AbilityService,
		private location: Location,
		private modalService: NgbModal) { }

	ngOnInit() { 
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.abilityTypeId = params.get('type');
			this.getAbilityType();
		});

		this.route.paramMap.subscribe((params: ParamMap) => {
			this.abilityId = params.get('id');
			if(this.abilityId != null)
				this.getAbility();
		});
	}

	open(content) {
		this.modalService.open(content).result;
	}

	getAbilityType(){
		this.abilityService.getAbilityType(this.abilityTypeId).subscribe((data: AbilityType) => this.abilityType = data);
	}

	getAbility(){
		this.abilityService.getAbility(this.abilityTypeId, this.abilityId).subscribe((data: Ability) => this.selectedAbility = data);
	}

}
