import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('App');
  });
  it('Buscando titulos', () => {
    const titles = [
      'What is Lorem Ipsum?',
      'What is Lorem Ipsum?'
    ];
    page.navigateTo();

    const elements = page.getDashBoardTitles();

    titles.forEach((title, index) => {
      expect(elements.get(index).getText()).toEqual(title);
    });
  });
});
