import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES,ActivatedRoute } from '@angular/router';
import { SptfService } from '../services/sptf.service';
import {artist} from '../models/artist';
import {albums} from '../models/album';
import { HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers:[SptfService,HTTP_PROVIDERS]
})
export class ArtistComponent implements OnInit {
  id: string;
  artist:artist[];
  albums:albums[];
  constructor(
    private _sptfService:SptfService,
    private _route:ActivatedRoute) {
    
  }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {

        this._sptfService.getArtist(id)
        .subscribe(artist => {
          this.artist=artist;
        })

        this._sptfService.getAlbums(id)
        .subscribe(album => {
          this.albums=album.items;
        })

      })
  }

}
