import { MovieDropdownPage } from './app.po';

describe('movie-dropdown App', () => {
  let page: MovieDropdownPage;

  beforeEach(() => {
    page = new MovieDropdownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
