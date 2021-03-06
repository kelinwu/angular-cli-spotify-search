import {provideRouter, RouterConfig} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {AboutComponent} from './about/about.component';
import {ArtistComponent} from './artist/artist.component';

const routes: RouterConfig = [
    {path:'', component:SearchComponent},
    {path:'about',component: AboutComponent},
    {path:'artist/:id',component: ArtistComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];