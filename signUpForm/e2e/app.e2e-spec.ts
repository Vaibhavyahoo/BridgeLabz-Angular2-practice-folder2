import { SignUpFormPage } from './app.po';

describe('sign-up-form App', function() {
  let page: SignUpFormPage;

  beforeEach(() => {
    page = new SignUpFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
