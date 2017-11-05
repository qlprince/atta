import { AttaPage } from './app.po';

describe('atta App', function() {
  let page: AttaPage;

  beforeEach(() => {
    page = new AttaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
