import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jsSHA from "jssha";

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.css']
})
export class MainframeComponent implements OnInit {

	loginMessage = '';
	username = '';
	password = '';
	tries = 3;

	constructor(private router: Router) { 
		if((new Date() === new Date(2018, 11, 16, 23, 0, 0))) { // Mainframe will stop working after 16th November 2018, 23:00.
			window.location.href = 'https://sondrehusevold.github.io/CyberpunkRPG/';
		}
		else {
			window.setTimeout(() => {
				router.navigate(['/home']);
			}, 264000);
		}
	}

  ngOnInit() {
  }

  login() {
  	var hash = new jsSHA("SHA-1", "TEXT");
  	hash.update(this.password);
  	if(this.username === "admin" && hash.getHash('HEX') === '147e8605b571106773b2842298af3fb1d2a81a60'){
  		let token = hash.getHash('HEX') + "ExtranousTokenAccepted";
  		this.router.navigate(['mainframeHome', token]);
  	}
  	else if(this.tries === 1)
  		this.router.navigate(['/home']);
  	else {
  		this.tries -= 1;
  		this.loginMessage = "Wrong credentials entered. Possible attempts left: " + this.tries;
  	}
  }
}
