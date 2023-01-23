xdescribe('testing Customizing Grid page', () => {
    before((client) => {
        this.currentPage = client.page.customizingGridPage();
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

    it("Check 'Customizig the Grid' link to docs", () => {
        this.pivotContainer.section.description.expect
            .element('@toCustomizingGridLink').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@toCustomizingGridLink').text.to.be.equal('Customizing the grid');
        this.pivotContainer.section.description.expect
            .element('@toCustomizingGridLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/doc/customizing-grid');
    });

    it('Check Customizing the grid Toggle (disable)', (client) => {
        client.execute(function () {
            window.scrollTo({top: 0});
        }, []);
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.be.selected;
        this.pivotContainer.section.toggle.click('@checkboxLabel');
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.not.be.selected;

        this.pivotContainer.section.toggle.expect
            .element('@checkboxLabel').text.to.be.equal("The grid cells are not customized")
        this.pivotContainer.section.toggle.assert.cssProperty("@checkboxLabel", "background-color", "rgba(193, 193, 193, 1)");
    });

    it('Check Customizing the grid Toggle (enabled)', () => {
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.not.be.selected;
        this.pivotContainer.section.toggle.click('@checkboxLabel');

        this.pivotContainer.section.toggle.expect.element('@checkbox').to.be.selected;
        this.pivotContainer.section.toggle.expect.element('@checkboxLabel')
            .text.to.be.equal("The grid cells are customized");
        this.pivotContainer.section.toggle.assert.cssProperty('@checkboxLabel', "background-color", "rgba(0, 164, 90, 1)");
        this.pivotContainer.assert.cssProperty('div[data-r="3"][data-c="1"]', "background-color", "rgba(0, 164, 90, 1)");
    });

    it('Open the Field List', () => {
        this.grid.click('@configuratorButton');
        this.pivotContainer.expect.section('@fieldList').to.be.visible;
    });

    it('Add field to rows', () => {
        this.fieldList.expect.section('@fieldListContent').to.be.visible;
        this.fieldListContent.section.hierarchiesList
            .expect.element('@businessTypeFieldCaption').text.to.be.equal('Business Type');
        this.fieldListContent.section.hierarchiesList.click('@businessTypeField');
        this.fieldListContent.section.rowsList.expect.element('@businessTypeInRows').to.be.present;
        this.fieldListContent.section.rowsList.expect.element('@businessTypeInRows').text.to.be.equal("Business Type");
    });

    it('Remove field from measures', () => {
        this.fieldListContent.section.measuresList.expect.element('@quantityMeasure').to.be.present;
        this.fieldListContent.section.measuresList.expect.element('@quantityMeasureCaption')
            .text.to.be.equal("Sum of Quantity");
        this.fieldListContent.section.hierarchiesList
            .expect.element('@quantityFieldCaption').text.to.be.equal('Quantity');
        this.fieldListContent.section.hierarchiesList.click('@quantityField');
        this.fieldListContent.section.measuresList.expect.element('@quantityMeasure').to.not.be.present;
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

    it('Closing the FieldList', () => {
        this.fieldList.section.fieldListHeader.click('@fieldsCancelButton');
        this.pivotContainer.expect.section('@fieldList').to.not.be.present;
    });

    after(client => client.end());
});
