describe('check FieldList', () => {
    before((client) => {
        this.currentPage = client.page.fieldList();
        this.pivotExample = this.currentPage.section.pivotExample;
        this.FieldList = this.pivotExample.section.FieldList;
        this.pivotGrid = this.pivotExample.section.pivotGrid;
        this.FieldListContent = this.FieldList.section.FieldListContent;
        this.currentPage.navigate();
    });

    beforeEach((client) => {
        this.pivotGrid.expect.element('@configuratorButton').to.be.visible;
        this.pivotGrid.click('@configuratorButton');
        this.pivotExample.expect.section('@FieldList').to.be.visible;
    });


    it('Adding field to rows', () => {
        this.FieldListContent.expect.section('@hierarchiesList').to.be.visible;
        this.FieldListContent.section.hierarchiesList.expect.element('@phoneField').to.be.visible;
        this.FieldListContent.section.hierarchiesList
            .expect.element('@phoneFieldCaption').text.to.be.equal("Phone");
        this.FieldListContent.section.hierarchiesList.click('@phoneField');
        this.FieldListContent.section.rowsList.expect.element("@phoneInRows").to.be.visible;
        this.FieldListContent.section.rowsList.expect.element("@phoneInRows").text.to.be.equal("Phone");
    });

    it('Adding measure to values', () => {
        this.FieldListContent.expect.section('@hierarchiesList').to.be.visible;
        this.FieldListContent.section.hierarchiesList.expect.element('@quantityField').to.be.visible;
        this.FieldListContent.section.hierarchiesList
            .expect.element('@quantityFieldCaption').text.to.be.equal("Quantity");
        this.FieldListContent.section.hierarchiesList.click('@quantityField');
        this.FieldListContent.section.measuresList.expect.element("@quantityMeasure").to.be.visible;
        this.FieldListContent.section.measuresList
            .expect.element("@quantityMeasure").text.to.be.equal("Sum of Quantity");
    });

    it('Changing aggregation', (client) => {
        this.FieldListContent.section.measuresList.click('@priceMeasureAggregation');
        client.click('li.fm-not-selected:nth-child(2)');
        this.FieldListContent.section.measuresList
            .expect.element('@priceMeasureCaption').text.to.be.equal("Count of Price")
    });

    it('Opening the drop-down', () => {
        this.FieldListContent.section.hierarchiesList.expect.element('@locationField').to.be.visible;
        this.FieldListContent.section.hierarchiesList
            .expect.element('@locationFieldCaption').text.to.be.equal("Location");
        this.FieldListContent.section.hierarchiesList.click('@locationField');
        this.FieldListContent.section.hierarchiesList
            .expect.element('@cityFieldCaption').text.to.be.equal("City");
        this.FieldListContent.section.hierarchiesList
            .expect.element('@countryFieldCaption').text.to.be.equal("Country");
    });

    it('Opening calculated value editor from the Field List', () => {
        this.FieldList.section.FieldListHeader.click('@fieldsCalculatedValueButton');
        this.pivotExample.expect.section("@calculatedValuesPopup").to.be.visible;
        this.pivotExample.section.calculatedValuesPopup
            .expect.element("@closeCalcValPopupButton").text.to.be.equal("CANCEL");
        this.pivotExample.section.calculatedValuesPopup
            .click("@closeCalcValPopupButton");
    });

    it('Opening calculated value editor from the Values', () => {
        this.FieldListContent.section.measuresList.click("@valuesCalculatedValueButton");
        this.pivotExample.expect.section("@calculatedValuesPopup").to.be.visible;
        this.pivotExample.section.calculatedValuesPopup
            .click("@closeCalcValPopupButton");
    });

    it('Adding empty calculated value', () => {
        this.FieldList.section.FieldListHeader.click('@fieldsCalculatedValueButton');
        this.pivotExample.expect.section("@calculatedValuesPopup").to.be.visible;
        this.pivotExample.section.calculatedValuesPopup
            .click("@applyCalcValPopupButton");
        this.pivotExample.expect.section("@alertPopup").to.be.visible;
        this.pivotExample.section.alertPopup
            .expect.element("@alertMessage").text.to.be.equal("The formula can't be empty.")
        this.pivotExample.section.alertPopup.click("@alertOkButton");
        this.pivotExample.section.calculatedValuesPopup
            .click("@closeCalcValPopupButton");

    });

    it('Adding calculated value with formula', (client) => {
        this.FieldList.section.FieldListHeader.click('@fieldsCalculatedValueButton');
        this.pivotExample.expect.section("@calculatedValuesPopup").to.be.visible;
        //document.querySelector('#fm-pivot-view div.fm-calculated-view  ul.fm-lst-measures > li:nth-child(1)').draggable
        const calculatedFormulaName = "formula";
        this.pivotExample.section.calculatedValuesPopup.doubleClick('@calcValCityField');
        client.setValue('input.fm-ui-element:nth-child(1)', calculatedFormulaName);
        this.pivotExample.section.calculatedValuesPopup.click("@applyCalcValPopupButton");
        client.waitForElementPresent('css selector', 'li.fm-selected:nth-child(3)')
            .expect.element('li.fm-selected:nth-child(3)').text.to.be.equal(calculatedFormulaName);
    });

    it('Applying changes in Field List', (client) => {
        this.FieldListContent.section.hierarchiesList.click('@phoneField');
        this.FieldListContent.section.rowsList.expect.element("@phoneInRows").to.be.visible;
        this.FieldList.section.FieldListHeader.click("@fieldsApplyButton");
        client.waitForElementPresent("css selector", ".fm-level-2")
        this.pivotGrid.expect.element("@phoneHierarchy").text.to.be.equal("PHONE");
        this.pivotGrid.click('@configuratorButton');//to match afterEach condition
    });

    afterEach(client => {
        this.FieldList.section.FieldListHeader.click('@fieldsCancelButton');
    });

    after(client => client.end());
});
