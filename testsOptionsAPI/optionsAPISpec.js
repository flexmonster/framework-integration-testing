describe("check Flexmonster Options API Demo page", () => {
  before((client) => {
    this.currentPage = client.page.optionsAPIPage();
    this.currentPage.navigate();
    client.window.maximize();
    //common sections
    this.sidebar = client.page.commons.sidebar();
    this.navbar = client.page.commons.navbar();
    this.toolbar = client.page.commons.toolbar();
    this.fieldList = client.page.commons.fieldList();

    //selectors
    this.calculatedValuesPopup = client.page.commons.calculatedValues();
    this.pivotGrid = client.page.commons.pivotGrid();
    this.pivotExample = this.currentPage.section.pivotContainer;
  });

  it("Checks common sections", (client) => {
    this.currentPage.navigate();
    this.navbar.runTestSuit();
    this.sidebar.runTestSuit();
    this.pivotGrid.runTestSuit();
    this.toolbar.runTestSuit();
    this.fieldList.runTestSuit();
    this.calculatedValuesPopup.runTestSuit();
  });

  it("Check title", () => {
    this.pivotExample.expect.element("@mainTitle").to.be.visible;
    this.pivotExample.expect.element("@mainTitle").text.to.be.equal("Pivot Table Demo (Options API)");
  });

  it("Check link to Vue docs", () => {
    this.pivotExample.section.description.expect.element("@toOptionsAPIVueLink").to.be.visible;
    this.pivotExample.section.description.expect.element("@toOptionsAPIVueLink").text.to.be.equal("Options API");
    this.pivotExample.section.description.expect
      .element("@toOptionsAPIVueLink")
      .to.have.attribute("href")
      .which.contains("https://vuejs.org/guide/introduction.html#options-api");
  });

  it("Check link to Flexmonster docs", () => {
    this.pivotExample.section.description.expect.element("@toOptionsAPIGuideLink").to.be.visible;
    this.pivotExample.section.description.expect
      .element("@toOptionsAPIGuideLink")
      .text.to.be.equal("Creating the pivot table using Options API");
    this.pivotExample.section.description.expect
      .element("@toOptionsAPIGuideLink")
      .to.have.attribute("href")
      .which.contains("https://www.flexmonster.com/doc/flexmonster-in-vue-3/?r=rm_vue/#options-api");
  });

  after((client) => client.end());
});
