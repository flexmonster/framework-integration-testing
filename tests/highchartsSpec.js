describe("testing page With Highcharts", () => {
  const gridVisibilityTimeout = 10000;

  before((client) => {
    client.window.maximize();
    this.currentPage = client.page.highchartsPage();
    this.currentPage.navigate();

    //common sections
    this.sidebar = client.page.commons.sidebar();
    this.navbar = client.page.commons.navbar();
    this.toolbar = client.page.commons.toolbar();

    //reusable selectors
    this.pivotContainer = this.currentPage.section.pivotContainer;
    this.grid = this.pivotContainer.section.pivotGrid;
    this.contextMenu = this.grid.section.contextMenu;
    this.filterPopup = this.grid.section.filterPopup;
    this.numberFormattingPopup = this.pivotContainer.section.numberFormattingPopup;
    this.fieldList = this.pivotContainer.section.fieldList;
    this.fieldListContent = this.fieldList.section.fieldListContent;

    browser.waitUntil(async () => {
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, gridVisibilityTimeout / 2);
      });
      return result;
    }, gridVisibilityTimeout);
  });

  it("Checks common sections", () => {
    this.navbar.runTestSuit();
    this.sidebar.runTestSuit();
    this.toolbar.runTestSuit();
    //different grid and fields in FieldList
  });

  it("Check 'Integration with Highcharts' link to docs", () => {
    this.pivotContainer.section.description.expect.element("@toHighchartsIntegrationLink").to.be.visible;
    this.pivotContainer.section.description.expect.element("@toHighchartsIntegrationLink").text.to.be.equal("Integration with Highcharts");
    this.pivotContainer.section.description.expect
      .element("@toHighchartsIntegrationLink")
      .to.have.attribute("href")
      .which.contains("https://www.flexmonster.com/doc/integration-with-highcharts");
  });

  it("Check the Highcharts container", () => {
    this.pivotContainer.section.chart.expect.element("@highcharts").to.be.visible;
  });

  it("Open the Field List", () => {
    this.grid.click("@configuratorButton");
    this.pivotContainer.expect.section("@fieldList").to.be.visible;
  });

  it("Add field to rows", () => {
    this.fieldList.expect.section("@fieldListContent").to.be.visible;
    this.fieldListContent.section.hierarchiesList.expect.element("@phoneFieldCaption").text.to.be.equal("Phone");
    this.fieldListContent.section.hierarchiesList.click("@phoneField");
    this.fieldListContent.section.rowsList.expect.element("@phoneFieldInRows").to.be.present;
    this.fieldListContent.section.rowsList.expect.element("@phoneFieldInRows").text.to.be.equal("Phone");
  });

  it("Add field to measures", () => {
    this.fieldListContent.section.hierarchiesList.expect.element("@quantityFieldCaption").text.to.be.equal("Quantity");
    this.fieldListContent.section.hierarchiesList.click("@quantityField");
    this.fieldListContent.section.measuresList.expect.element("@quantityMeasure").to.be.present;
    this.fieldListContent.section.measuresList.expect.element("@quantityCaption").text.to.be.equal("Sum of Quantity");
  });

  it("Adding calculated value with formula", (client) => {
    this.fieldList.section.fieldListHeader.click("@fieldsCalculatedValueButton");
    this.pivotContainer.expect.section("@calculatedValuesPopup").to.be.visible;
    const calculatedFormulaName = "formula";
    this.pivotContainer.section.calculatedValuesPopup.doubleClick("@calcValBTField");
    client.setValue("input.fm-ui-element:nth-child(1)", calculatedFormulaName);
    client.execute(function () {
      window.scrollTo({ top: 0 });
    }, []);
    this.pivotContainer.section.calculatedValuesPopup.waitForElementVisible("@applyCalcValPopupButton").click("@applyCalcValPopupButton");
    client.waitForElementPresent("css selector", "li.fm-selected:nth-child(3)");
    this.fieldListContent.section.measuresList.expect.element("@formulaMeasureCaption").text.to.be.equal(calculatedFormulaName);
  });

  it("Closing the FieldList", () => {
    this.fieldList.section.fieldListHeader.click("@fieldsCancelButton");
    this.pivotContainer.expect.section("@fieldList").to.not.be.present;
  });

  it("Check filters pop-up", (client) => {
    this.grid.section.headers.expect.element("@countryFilter").to.be.visible;
    this.grid.section.headers.click("@countryFilter");
    this.grid.expect.section("@filterPopup").to.be.visible;
    this.filterPopup.expect.element("@cancelFilterButton").to.be.visible;
    this.filterPopup.expect.element("@cancelFilterButton").text.to.be.equal("CANCEL");
    this.filterPopup.click("@cancelFilterButton");
    this.grid.expect.section("@filterPopup").to.not.be.visible;
  });

  it("Check members filters", () => {
    this.grid.section.headers.expect.element("@countryFilter").to.be.visible;
    this.grid.section.headers.click("@countryFilter");
    this.grid.expect.section("@filterPopup").to.be.visible;
    this.filterPopup.expect.element("@selectAllMembersCheckbox").to.be.visible;
    this.filterPopup.assert.hasClass("@selectAllMembersCheckbox", "fm-ui-semi-selected");
    this.filterPopup.click("@selectAllMembersCheckbox");
    this.filterPopup.assert.hasClass("@selectAllMembersCheckbox", "fm-selected");
    this.filterPopup.click("@selectAllMembersCheckbox");
    this.filterPopup.assert.not.hasClass("@selectAllMembersCheckbox", "fm-selected");
    this.filterPopup.click("@australiaMemberCheckbox");
    this.filterPopup.assert.hasClass("@australiaMemberCheckbox", "fm-selected");
    this.filterPopup.click("@applyFilterButton");
  });

  it("Check expands", (client) => {
    this.grid.section.rowMembers.expect.element("@countryAustraliaFiltered").to.be.visible;
    this.grid.section.rowMembers.expect.element("@countryAustraliaFiltered").text.to.be.equal("Australia");
    this.grid.section.rowMembers.assert.hasClass("@countryAustraliaFilteredExpandArrow", "fm-collapsed-icon");
    this.grid.section.rowMembers.click("@countryAustraliaFiltered");
    this.grid.section.rowMembers.assert.hasClass("@countryAustraliaFilteredExpandArrow", "fm-expanded-icon");
    this.grid.section.rowMembers.expect.element("@statusShipped").text.to.be.equal("Shipped");
  });

  it("Sort rows", (client) => {
    client.expect.element('div[data-r="3"][data-c="1"]').text.to.be.equal("$113,490.00");
    this.grid.section.rowMembers.click("@countryAustraliaFilteredSortingArrow");
    client.waitForElementPresent('div[data-r="3"][data-c="1"]');
    this.grid.expect.element('div[data-r="3"][data-c="1"]').text.to.be.equal("$1,166,707.00");
  });

  it("Check Number formatting pop-up from context menu", (client) => {
    client.rightClick("css selector", 'div[data-r="3"][data-c="1"]');
    this.grid.expect.section("@contextMenu").to.be.visible;
    this.contextMenu.click("@contextMenuRow3");
    this.pivotContainer.expect.section("@numberFormattingPopup").to.be.visible;
    this.numberFormattingPopup.expect.element("@thousandsSeparatorLabel").text.to.be.equal("Thousands separator");
    this.numberFormattingPopup.click("@thousandsSeparatorDropdownButton");
    this.numberFormattingPopup.expect.element("@thousandsSeparatorComma").text.to.be.equal(",");
    this.numberFormattingPopup.click("@thousandsSeparatorComma");
    this.numberFormattingPopup.click("@numberFormattingApplyButton");
    this.pivotContainer.expect.section("@numberFormattingPopup").to.not.be.present;
    client.waitForElementPresent('div[data-r="3"][data-c="1"]');
    this.grid.expect.element('div[data-r="3"][data-c="1"]').text.to.contain("$1,166,707.00");
  });

  it("Check member header context menu", (client) => {
    this.grid.section.rowMembers.rightClick("@countryAustraliaFiltered");
    this.grid.section.rowMembers.rightClick("@countryAustraliaFiltered");
    this.grid.expect.section("@contextMenu").to.be.visible;
    this.contextMenu.expect.element("@contextMenuRow1").text.to.be.equal("Collapse");
    this.contextMenu.expect.element("@contextMenuRow2").text.to.be.equal("Sort row ascending");
    this.contextMenu.expect.element("@contextMenuRow3").text.to.be.equal("Clear sorting");
    this.contextMenu.click("@contextMenuRow3");
    client.waitForElementPresent('div[data-r="3"][data-c="1"]');
    client.expect.element('div[data-r="3"][data-c="1"]').text.to.contain("$113,490.00");
  });

  it("Drill through a value using context menu", (client) => {
    client.rightClick("css selector", 'div[data-r="3"][data-c="1"]');
    this.grid.expect.section("@contextMenu").to.be.visible;
    this.contextMenu.expect.element("@contextMenuRow1").text.to.be.equal("Drill through");
    this.contextMenu.expect.element("@contextMenuRow2").text.to.be.equal("Aggregation");
    this.contextMenu.expect.element("@contextMenuRow3").text.to.be.equal("Number formatting");
    this.contextMenu.expect.element("@contextMenuRow4").text.to.be.equal("Conditional formatting");
    this.contextMenu.click("@contextMenuRow1");
    this.grid.expect.section("@drillThroughPopup").to.be.visible;
    this.grid.section.drillThroughPopup.expect.element("@drillThroughTitle").text.to.be.equal("Details");
    this.grid.section.drillThroughPopup.click("@drillThroughCloseButton");
  });

  it("Check Conditional formatting performance", (client) => {
    client.assert.cssProperty('div[data-r="3"][data-c="1"]', "background-color", "rgba(223, 56, 0, 1)");
    client.rightClick("css selector", 'div[data-r="3"][data-c="1"]');
    this.grid.expect.section("@contextMenu").to.be.visible;
    this.contextMenu.click("@contextMenuRow4");
    this.pivotContainer.expect.section("@conditionalFormattingPopup").to.be.visible;
    this.pivotContainer.section.conditionalFormattingPopup.click("@deleteSecondConditionButton");
    this.pivotContainer.section.conditionalFormattingPopup.click("@conditionalFormattingApplyButton");
    this.pivotContainer.expect.section("@conditionalFormattingPopup").to.not.be.present;
    client.waitForElementPresent('div[data-r="3"][data-c="1"]');
    client.assert.not.cssProperty('div[data-r="3"][data-c="1"]', "background-color", "rgba(223, 56, 0, 1)");
  });

  xit("Check license pop-up", (client) => {
    client.rightClick("css selector", 'div[data-r="4"][data-c="1"]');
    client.keys([client.Keys.CONTROL, client.Keys.ALT, "i"]);
    this.grid.expect.section("@licensePopup").to.be.visible;
    this.grid.section.licensePopup.expect.element("@licenseText").text.to.contain("License key");
    this.grid.section.licensePopup.click("@licenseCloseButton");
  });

  after((client) => client.end());
});
