import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { MainframeComponent } from './mainframe/mainframe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vampire the Masquerade: Miami';

    constructor(private router: Router) {
        router.events.subscribe( (event: Event) => {
            if (event instanceof NavigationStart) {
            	let test = Math.floor(Math.random() * Math.floor(100));
            	if(test < 10 && (new Date() === new Date(2018, 11, 16, 23, 0, 0))) {
    				window.location.href = 'https://sondrehusevold.github.io/CyberpunkRPG/';
            	}
			}
        });
	};
}
