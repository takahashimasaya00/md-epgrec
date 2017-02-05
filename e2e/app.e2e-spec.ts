import { MdEpgrecPage } from './app.po';

describe('md-epgrec App', function() {
  let page: MdEpgrecPage;

  beforeEach(() => {
    page = new MdEpgrecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
