xdescribe('testing page With Highcharts', () => {
    before((client) => {
        this.currentPage = client.page.highchartsPage();
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();
        this.calculatedValuesPopup = client.page.commons.calculatedValues();
        this.pivotContainer = this.currentPage.section.pivotContainer;
        this.grid = this.pivotContainer.section.pivotGrid;
        this.fieldList = this.pivotContainer.section.fieldList;
        this.fieldListContent = this.fieldList.section.fieldListContent;
        this.currentPage.navigate();
    });

    it("Checks common sections", () => {
        this.navbar.runTestSuit();
        this.sidebar.runTestSuit();
        this.toolbar.runTestSuit();
        this.calculatedValuesPopup.runTestSuit();
        //different grid and fields in FieldList
    });

    it("Check 'Integration with Highcharts' link to docs", () => {
        this.pivotContainer.section.description.expect
            .element('@toHighchartsIntegrationLink').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@toHighchartsIntegrationLink').text.to.be.equal('Integration with Highcharts');
        this.pivotContainer.section.description.expect
            .element('@toHighchartsIntegrationLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/doc/integration-with-highcharts');
    });

    it('Check the Highcharts container', () => {
        this.pivotContainer.section.chart.expect.element('@highcharts').to.be.visible;
    });

    it('Open the Field List', () => {
        this.grid.click('@configuratorButton');
        this.pivotContainer.expect.section('@fieldList').to.be.visible;
    });

    it('Add field to rows', () => {
        this.fieldList.expect.section('@fieldListContent').to.be.visible;
        this.fieldListContent.section.hierarchiesList
            .expect.element('@destinationFieldCaption').text.to.be.equal('Destination');
        this.fieldListContent.section.hierarchiesList.click('@destinationField');
        this.fieldListContent.section.rowsList.expect.element('@destinationInRows').to.be.present;
        this.fieldListContent.section.rowsList.expect.element('@destinationInRows').text.to.be.equal("Destination");
    });

    it('Add field to measures', () => {
        this.fieldListContent.section.hierarchiesList
            .expect.element('@discountFieldCaption').text.to.be.equal('Discount');
        this.fieldListContent.section.hierarchiesList.click('@discountField');
        this.fieldListContent.section.measuresList.expect.element('@discountMeasure').to.be.present;
        this.fieldListContent.section.measuresList
            .expect.element('@discountMeasureCaption').text.to.be.equal("Sum of Discount");
    });

    it('Adding calculated value with formula', (client) => {
        this.fieldList.section.fieldListHeader.click('@fieldsCalculatedValueButton');
        this.pivotContainer.expect.section("@calculatedValuesPopup").to.be.visible;
        const calculatedFormulaName = "formula";
        this.pivotContainer.section.calculatedValuesPopup.doubleClick('@calcValBTField');
        client.setValue('input.fm-ui-element:nth-child(1)', calculatedFormulaName);
        client.execute(function () {
            window.scrollTo({top: 0});
        }, []);
        this.pivotContainer.section.calculatedValuesPopup
            .waitForElementVisible("@applyCalcValPopupButton")
            .click("@applyCalcValPopupButton");
        client.waitForElementPresent('css selector', 'li.fm-selected:nth-child(3)');
        this.fieldListContent.section.measuresList
            .expect.element('@formulaMeasureCaption').text.to.be.equal(calculatedFormulaName);
    });

    after(client => client.end());
});
