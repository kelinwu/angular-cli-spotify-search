import { SpotifyCliPage } from './app.po';

describe('spotify-cli App', function() {
  let page: SpotifyCliPage;

  beforeEach(() => {
    page = new SpotifyCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
