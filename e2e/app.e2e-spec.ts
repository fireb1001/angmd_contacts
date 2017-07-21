import { LetsplayPage } from './app.po';

describe('letsplay App', () => {
  let page: LetsplayPage;

  beforeEach(() => {
    page = new LetsplayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
