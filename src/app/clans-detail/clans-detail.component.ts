import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Clan } from '../Clan';
import { ClanService }  from '../clan.service';
import { NgbTabset, NgbTabContent, NgbTabTitle } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clans-detail',
  templateUrl: './clans-detail.component.html',
  styleUrls: ['./clans-detail.component.css']
})
export class ClansDetailComponent implements OnInit {
	id: string;
	clan: Clan;

	constructor(private route: ActivatedRoute,
	private clanService: ClanService,
	private location: Location) { }

	ngOnInit() {
	  this.route.paramMap.subscribe((params: ParamMap) => {
	  	this.id = params.get('id');
	  			this.getClan();
	  });
	}

	getClan(): void {

	  this.clanService.getClan(this.id).subscribe((data: Clan) => this.clan = data);
	}
}
