import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { CharacterAttribute } from '../CharacterAttribute';
import { AttributeService }  from '../attribute.service';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {
	id: string;
	attri: CharacterAttribute;


	constructor(private route: ActivatedRoute,
		private attributeService: AttributeService,
		private location: Location,
		private modalService: NgbModal) { }

  ngOnInit() {
	this.route.paramMap.subscribe((params: ParamMap) => {
		this.id = params.get('id');
		this.getAttr();
	});
  }

  open(content) {
    this.modalService.open(content).result;
  }

	getAttr(): void {
		this.attributeService.getCharAttribute(this.id).subscribe((data: CharacterAttribute) => this.attri = data);
	}
}
