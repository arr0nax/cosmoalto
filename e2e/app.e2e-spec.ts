import { CosmoaltoPage } from './app.po';

describe('cosmoalto App', () => {
  let page: CosmoaltoPage;

  beforeEach(() => {
    page = new CosmoaltoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
