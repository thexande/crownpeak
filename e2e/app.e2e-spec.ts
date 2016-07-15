import { CrownpeakPage } from './app.po';

describe('crownpeak App', function() {
  let page: CrownpeakPage;

  beforeEach(() => {
    page = new CrownpeakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
