import { Component, OnInit } from '@angular/core';
import { SptfService } from '../services/sptf.service';
import { artist } from '../models/artist';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sptf-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  providers:[SptfService],
  directives: [ROUTER_DIRECTIVES]
})
export class SearchComponent implements OnInit {

  constructor(private _sptfService: SptfService) { }

  ngOnInit() {
  }

  searchStr:string;
  searchRes:artist[];
  searchMusic(){
    this._sptfService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.artists.items;
        console.log(res.artists.items)
      });
  }

}
