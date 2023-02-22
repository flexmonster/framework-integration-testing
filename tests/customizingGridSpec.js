describe('testing Customizing Grid page', () => {

    before((client) => {
        client.windowMaximize()
        //client.resizeWindow(1700, 1200);
        this.currentPage = client.page.customizingGridPage();
        this.currentPage.navigate();

        //common sections
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();
        this.calculatedValuesPopup = client.page.commons.calculatedValues();

        //selectors
        this.pivotContainer = this.currentPage.section.pivotContainer;
        this.grid = this.pivotContainer.section.pivotGrid;
        this.filterPopup=this.grid.section.filterPopup;
        this.contextMenu=this.grid.section.contextMenu;
        this.fieldList = this.pivotContainer.section.fieldList;
        this.fieldListContent = this.fieldList.section.fieldListContent;
        this.numberFormattingPopup = this.pivotContainer.section.numberFormattingPopup;
        this.conditionalFormattingPopup = this.pivotContainer.section.conditionalFormattingPopup;
    });

    it("Checks common sections", () => {
        this.navbar.runTestSuit();
        this.sidebar.runTestSuit();
        this.toolbar.runTestSuit();
     //   this.calculatedValuesPopup.runTestSuit();
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

    it('Check Customizing the grid Toggle (enabled)', (client) => {
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.not.be.selected;
        this.pivotContainer.section.toggle.click('@checkboxLabel');

        this.pivotContainer.section.toggle.expect.element('@checkbox').to.be.selected;
        this.pivotContainer.section.toggle.expect.element('@checkboxLabel')
            .text.to.be.equal("The grid cells are customized");
        this.pivotContainer.section.toggle.assert.cssProperty('@checkboxLabel', "background-color", "rgba(0, 164, 90, 1)");
        client.waitForElementPresent('div[data-r="3"][data-c="1"]');
        client.assert.cssProperty('div[data-r="3"][data-c="1"]', "background-color", "rgba(0, 164, 90, 1)");
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
            window.scrollTo({top: 300});
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

    it('Check filters pop-up', (client) => {
        this.grid.section.headers.expect.element('@categoryFilter').to.be.visible;
        this.grid.section.headers.click('@categoryFilter');
        this.grid.expect.section('@filterPopup').to.be.visible;
        this.filterPopup.expect.element('@cancelFilterButton').to.be.visible;
        this.filterPopup.expect.element('@cancelFilterButton').text.to.be.equal('CANCEL');
        this.filterPopup.click("@cancelFilterButton");
        this.grid.expect.section('@filterPopup').to.not.be.visible;
    })

    it('Check members filters', () => {
        this.grid.section.headers.expect.element('@categoryFilter').to.be.visible;
        this.grid.section.headers.click('@categoryFilter');
        this.grid.expect.section('@filterPopup').to.be.visible;
        this.filterPopup.expect.element('@selectAllMembersCheckbox').to.be.visible;
        this.filterPopup.assert.hasClass('@selectAllMembersCheckbox', 'fm-selected');
        this.filterPopup.click('@selectAllMembersCheckbox');
        this.filterPopup.assert.not.hasClass('@selectAllMembersCheckbox', 'fm-selected');
        this.filterPopup.click('@bikesMemberCheckbox');
        this.filterPopup.assert.hasClass('@bikesMemberCheckbox', 'fm-selected');
        this.filterPopup.click("@applyFilterButton");
    })

    it('Sort rows', (client) => {
        client.expect.element('div[data-r="3"][data-c="1"]').text.to.contain('94 634');
        this.grid.section.rowMembers.click('@sumOfPriceSortingArrow');
        this.grid.section.rowMembers.expect.element('@sumOfPriceLabel').text.to.be.equal('Sum of Price');
        this.grid.expect.element('div[data-r="3"][data-c="1"]').text.to.contain('113 885');
    })

    it('Check measure header context menu', (client) => {
        this.grid.section.rowMembers.rightClick("@sumOfPriceLabel");
        this.grid.expect.section('@contextMenu').to.be.visible;
        this.contextMenu
            .expect.element('@contextMenuRow1').text.to.be.equal("Sort row ascending");
        this.contextMenu
            .expect.element('@contextMenuRow2').text.to.be.equal("Clear sorting");
        this.contextMenu
            .expect.element('@contextMenuRow3').text.to.be.equal("Aggregation");
        this.contextMenu
            .expect.element('@contextMenuRow4').text.to.be.equal("Number formatting");
        this.contextMenu
            .expect.element('@contextMenuRow5').text.to.be.equal("Conditional formatting");
        this.contextMenu
            .expect.element('@contextMenuRow6').text.to.be.equal("Remove measure");
        this.contextMenu.click('@contextMenuRow2');
        this.grid.expect.element('div[data-r="3"][data-c="1"]').text.to.contain('94 634');
    })

    it('Check Number formatting pop-up from context menu', (client) => {
        this.grid.section.rowMembers.rightClick('@sumOfPriceLabel');
        this.grid.expect.section('@contextMenu').to.be.visible;
        this.contextMenu.click('@contextMenuRow4');
        this.pivotContainer.expect.section('@numberFormattingPopup').to.be.visible;
        this.numberFormattingPopup.expect
            .element('@thousandsSeparatorLabel').text.to.be.equal("Thousands separator");
        this.numberFormattingPopup.click('@thousandsSeparatorDropdownButton');
        this.numberFormattingPopup.expect.element('@thousandsSeparatorComma').text.to.be.equal(',');
        this.numberFormattingPopup.click('@thousandsSeparatorComma');
        this.numberFormattingPopup.click('@numberFormattingApplyButton');
        this.pivotContainer.expect.section('@numberFormattingPopup').to.not.be.present;
        client.expect.element('div[data-r="3"][data-c="1"]').text.to.contain('94,634');
    })


    it('Add condition using context menu', (client) => {
        client.execute(function () {
            window.scrollTo({top: 500});
        }, []);
        this.grid.section.rowMembers.rightClick('@sumOfPriceLabel');
        this.contextMenu.click('@contextMenuRow5');
        this.pivotContainer.expect.section('@conditionalFormattingPopup').to.be.visible;
        this.conditionalFormattingPopup.expect.element('@conditionalFormattingPlaceholder').to.be.visible;

        this.conditionalFormattingPopup.click('@conditionalFormattingAddButton');
        this.conditionalFormattingPopup.expect.element('@conditionalFormattingPlaceholder').to.not.be.visible;

        this.conditionalFormattingPopup.expect.section('@measuresDropdown').to.be.visible;
        this.conditionalFormattingPopup.section.measuresDropdown
            .click('@measuresDropdownButton');
        this.conditionalFormattingPopup.section.measuresDropdown
            .expect.element('@measuresDropdownList').to.be.visible;
        this.conditionalFormattingPopup.section.measuresDropdown
            .assert.hasClass('@measuresDropdownListAll','fm-selected');
        this.conditionalFormattingPopup.section.measuresDropdown
            .click('@measuresDropdownListDiscount');
        this.conditionalFormattingPopup.section.measuresDropdown
            .expect.element('@measuresDropdownButton').text.to.be.equal("Discount (Sum)")

        this.conditionalFormattingPopup.expect.section('@conditionsDropdown').to.be.visible;
        this.conditionalFormattingPopup.section.conditionsDropdown
            .click('@conditionsDropdownButton');
        this.conditionalFormattingPopup.section.conditionsDropdown
            .expect.element('@conditionsDropdownList').to.be.visible;
        this.conditionalFormattingPopup.section.conditionsDropdown
            .assert.hasClass('@conditionsDropdownListLessThan','fm-selected');
        this.conditionalFormattingPopup.section.conditionsDropdown
            .click('@conditionsDropdownListGreaterThan');
        client.execute(function () {
            window.scrollTo({top: 300});
        }, []);
        this.conditionalFormattingPopup.expect.section('@colorPick').to.be.visible;
        this.conditionalFormattingPopup.section.colorPick.click('@colorPickButton');
        this.conditionalFormattingPopup.section.colorPick.expect.element('@colorPickPopup').to.be.visible;
        this.conditionalFormattingPopup.section.colorPick.click('@whiteColorButton')
        this.conditionalFormattingPopup.section.colorPick.click('@highlightButton');
        this.conditionalFormattingPopup.section.colorPick.click('@orangeColorButton')
        this.conditionalFormattingPopup.section.colorPick.click('@applyColorsButton');

        this.conditionalFormattingPopup.click('@conditionalFormattingApplyButton');
        this.pivotContainer.expect.section('@conditionalFormattingPopup').to.not.be.present;
        client.assert.cssProperty('div[data-r="4"][data-c="1"]', "background-color", "rgba(255, 152, 0, 1)");

    })

    it('Check drill-through', (client) => {
        this.grid.doubleClick('div[data-r="3"][data-c="1"]');
        this.grid.expect.section('@drillThroughPopup').to.be.visible;
        this.grid.section.drillThroughPopup.expect.element('@drillThroughTitle').text.to.be.equal('Details');
        client.execute(function () {
            window.scrollTo({top: 300});
        }, []);
        this.grid.section.drillThroughPopup.click('@drillThroughCloseButton');
    });

    xit('Check license pop-up', (client) => {
        client.keys([client.Keys.CONTROL, client.Keys.ALT, "i"]);
        this.grid.expect.section('@licensePopup').to.be.visible;
        this.grid.section.licensePopup.expect.element('@licenseText').text.to.contain('License key');
        this.grid.section.licensePopup.click('@licenseCloseButton');
    });

    after(client => client.end());
});
