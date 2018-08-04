import { SiteHeaderModule } from './site-header.module';

describe('SiteHeaderModule', () => {
  let siteHeaderModule: SiteHeaderModule;

  beforeEach(() => {
    siteHeaderModule = new SiteHeaderModule();
  });

  it('should create an instance', () => {
    expect(siteHeaderModule).toBeTruthy();
  });
});
