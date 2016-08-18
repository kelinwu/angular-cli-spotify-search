import { Component } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import {AboutComponent} from './about/about.component';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, SearchComponent],
  precompile: [SearchComponent, AboutComponent],
  providers: [HTTP_PROVIDERS]
})

export class AppComponent {
  //title = 'app works!';
}
