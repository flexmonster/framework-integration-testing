describe('testing Update data page', () => {

    before((client) => {
        //client.resizeWindow(1700, 1200);
        client.windowMaximize();
        this.currentPage = client.page.updateDataPage();

        //common sections
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();

        //selectors
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
        //different grid and fields in Field List
    });

    it('Check link to docs', () => {
        this.pivotContainer.section.description.expect.element('@toUpdateDataLink').to.be.visible;
        this.pivotContainer.section.description
            .expect.element('@toUpdateDataLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/api/updatedata');
    });

    it('Check update data button', (client) => {
        this.pivotContainer.expect.element('@updateDataButton').to.be.visible;
        const cellValue = '100';//TODO try to extract value from cell using Nightwatch API
        client.expect.element('div[data-r="1"][data-c="1"]').text.to.be.equal(cellValue);
        this.pivotContainer.click('@updateDataButton');
        this.grid.waitForElementPresent('css selector', 'div[data-r="1"][data-c="1"]');
        client.expect.element('div[data-r="1"][data-c="1"]').text.to.not.be.equal(cellValue);
    });


    it('Open the Field List', () => {
        try {
            this.grid.click('@configuratorButton');
            this.pivotContainer.expect.section('@fieldList').to.be.visible;
        } catch (e) {
            this.grid.click('@configuratorButton');
            this.pivotContainer.expect.section('@fieldList').to.be.visible;
        }
    });

    it('Add field to rows', () => {
        this.fieldList.expect.section('@fieldListContent').to.be.visible;
        this.fieldListContent.section.hierarchiesList
            .expect.element('@colorFieldCaption').text.to.be.equal('Color');
        this.fieldListContent.section.hierarchiesList.click('@colorField');
        this.fieldListContent.section.rowsList.expect.element('@colorInRows').to.be.present;
        this.fieldListContent.section.rowsList.expect.element('@colorInRows').text.to.be.equal("Color");
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
            window.scrollTo({ top: 300 });
        }, []);
        this.pivotContainer.section.calculatedValuesPopup
            .waitForElementVisible("@applyCalcValPopupButton")
            .click("@applyCalcValPopupButton");
        client.waitForElementPresent('css selector', 'li.fm-selected:nth-child(3)');
        this.fieldListContent.section.measuresList
            .expect.element('@formulaMeasureCaption').text.to.be.equal(calculatedFormulaName);
    });

    it('Closing the FieldList', () => {
        this.fieldList.section.fieldListHeader.click('@fieldsCancelButton');
        this.pivotContainer.expect.section('@fieldList').to.not.be.present;
    });

    after(client => client.end());

});
