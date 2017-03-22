import { SignUpDataDrivenPage } from './app.po';

describe('sign-up-data-driven App', function() {
  let page: SignUpDataDrivenPage;

  beforeEach(() => {
    page = new SignUpDataDrivenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
