const {client} = require("nightwatch");
let testSuit = {

    runTestSuit: function () {

        const calculatedValuesPopup = this.section.calculatedValuesPopup;
        const FieldList = this.section.FieldList;
        const pivotGrid = this.section.pivotGrid;
        const alertPopup = this.section.alertPopup;
        const FieldListContent = this.section.FieldList.section.FieldListContent;

        describe("Check FieldList", () => {

            it('Adding field to rows', (client) => {
                //opening the FieldList
                pivotGrid.expect.element('@configuratorButton').to.be.visible;
                pivotGrid.click('@configuratorButton');
                client.waitForElementVisible('css selector',
                    'div.fm-ui-window:nth-child(2)');
                this.expect.section('@FieldList').to.be.visible;

                FieldListContent.expect.section('@hierarchiesList').to.be.visible;
                FieldListContent.section.hierarchiesList.expect.element('@phoneField').to.be.visible;
                FieldListContent.section.hierarchiesList
                    .expect.element('@phoneFieldCaption').text.to.be.equal("Phone");
                FieldListContent.section.hierarchiesList.click('@phoneField');
                FieldListContent.section.rowsList.expect.element("@phoneInRows").to.be.visible;
                FieldListContent.section.rowsList.expect.element("@phoneInRows").text.to.be.equal("Phone");

            });

            it('Adding measure to values', () => {
                FieldListContent.expect.section('@hierarchiesList').to.be.visible;
                FieldListContent.section.hierarchiesList.expect.element('@quantityField').to.be.visible;
                FieldListContent.section.hierarchiesList
                    .expect.element('@quantityFieldCaption').text.to.be.equal("Quantity");
                FieldListContent.section.hierarchiesList.click('@quantityField');
                FieldListContent.section.measuresList.expect.element("@quantityMeasure").to.be.visible;
                FieldListContent.section.measuresList
                    .expect.element("@quantityMeasure").text.to.be.equal("Sum of Quantity");
            });

            it('Changing aggregation', (client) => {
                FieldListContent.section.measuresList.click('@priceMeasureAggregation');
                client.click('li.fm-not-selected:nth-child(2)');
                FieldListContent.section.measuresList
                    .expect.element('@priceMeasureCaption').text.to.be.equal("Count of Price");
            });

            it('Applying changes in Field List', (client) => {
                FieldList.section.FieldListHeader.click("@fieldsApplyButton");
                client.waitForElementPresent("css selector", ".fm-level-2")
                pivotGrid.expect.element("@phoneHierarchy").text.to.be.equal("PHONE");
            });

            it('Opening the drop-down', () => {
                //opening the FieldList
                pivotGrid.click('@configuratorButton');

                FieldListContent.section.hierarchiesList.expect.element('@locationField').to.be.visible;
                FieldListContent.section.hierarchiesList
                    .expect.element('@locationFieldCaption').text.to.be.equal("Location");
                FieldListContent.section.hierarchiesList.click('@locationField');
                FieldListContent.section.hierarchiesList
                    .expect.element('@cityFieldCaption').text.to.be.equal("City");
                FieldListContent.section.hierarchiesList
                    .expect.element('@countryFieldCaption').text.to.be.equal("Country");
            });

            it('Opening calculated value editor from the Field List', () => {
                FieldList.section.FieldListHeader.click('@fieldsCalculatedValueButton');
                this.expect.section("@calculatedValuesPopup").to.be.visible;
                calculatedValuesPopup
                    .expect.element("@closeCalcValPopupButton").text.to.be.equal("CANCEL");
                calculatedValuesPopup
                    .click("@closeCalcValPopupButton");
            });

            it('Opening calculated value editor from the Values', () => {
                FieldListContent.section.measuresList.click("@valuesCalculatedValueButton");
                this.expect.section("@calculatedValuesPopup").to.be.visible;
                calculatedValuesPopup.click("@closeCalcValPopupButton");
            });

            it('Adding empty calculated value', () => {
                FieldList.section.FieldListHeader.click('@fieldsCalculatedValueButton');
                this.expect.section("@calculatedValuesPopup").to.be.visible;
                calculatedValuesPopup
                    .click("@applyCalcValPopupButton");
                this.expect.section("@alertPopup").to.be.visible;
                alertPopup
                    .expect.element("@alertMessage").text.to.be.equal("The formula can't be empty.")
                alertPopup.click("@alertOkButton");
                calculatedValuesPopup
                    .click("@closeCalcValPopupButton");
            });

            it('Adding calculated value with formula', (client) => {
                FieldList.section.FieldListHeader.click('@fieldsCalculatedValueButton');
                this.expect.section("@calculatedValuesPopup").to.be.visible;
                const calculatedFormulaName = "formula";
                calculatedValuesPopup.doubleClick('@calcValCityField');
                client.setValue('input.fm-ui-element:nth-child(1)', calculatedFormulaName);
                calculatedValuesPopup.click("@applyCalcValPopupButton");
                client.waitForElementPresent('css selector', 'li.fm-selected:nth-child(4)');
                FieldListContent.section.measuresList
                    .expect.element('@formulaMeasureCaption').text.to.be.equal(calculatedFormulaName);
                FieldList.section.FieldListHeader.click("@fieldsCancelButton");
            });
        });
    }
}

module.exports = {
    commands: [testSuit],
    sections: {
                calculatedValuesPopup: {
                    selector: "div.fm-calculated-view", elements: {
                        applyCalcValPopupButton: "div.fm-popup-header > div.fm-ui-btns-row > button:nth-child(2)",
                        closeCalcValPopupButton: "div.fm-popup-header > div.fm-ui-btns-row > button:nth-child(3)",
                        formulaTextarea: "div.fm-popup-content > div.fm-formula-wrap > textarea",
                        calcValCityField: "ul.fm-lst-measures > li:nth-child(1)"
                    }
                },
                alertPopup: {
                    selector: "div.fm-ui-popup.fm-alert-view", elements: {
                        alertMessage: "div.fm-content span:nth-child(2)",
                        alertOkButton: "div.fm-content button.fm-ui-btn-dark"
                    }
                },
                FieldList: {
                    selector: "div.fm-fields-opened > div.fm-pivot-fields", sections: {
                        FieldListHeader: {
                            selector: "div.fm-popup-header", elements: {
                                fieldsCalculatedValueButton: "div.fm-ui-btns-row button:nth-child(1)",
                                fieldsApplyButton: "div.fm-ui-btns-row button:nth-child(2)",
                                fieldsCancelButton: "div.fm-ui-btns-row button:nth-child(3)"
                            }
                        }, FieldListContent: {
                            selector: "div.fm-popup-content", sections: {
                                hierarchiesList: {
                                    selector: "ul.fm-lst-hierarchies", elements: {
                                        locationField: "li:nth-child(2) > span:nth-child(1)",
                                        locationFieldCaption: "li:nth-child(2) > span:nth-child(2)",
                                        cityFieldCaption: "li:nth-child(3) > span:nth-child(2)",
                                        countryFieldCaption: "li:nth-child(4) > span:nth-child(2)",
                                        phoneField: "li:nth-child(7) > span:nth-child(1)",
                                        phoneFieldCaption: "li:nth-child(7) > span:nth-child(2)",
                                        quantityField: "li:nth-child(10) > span:nth-child(1)",
                                        quantityFieldCaption: "li:nth-child(10) > span:nth-child(2)",
                                    }
                                }, rowsList: {
                                    selector: "ul.fm-lst-rows", elements: {
                                        phoneInRows: "li:nth-child(3) > span:nth-child(1)"
                                    }
                                }, measuresList: {
                                    selector: "div.fm-list-wrap-measures", elements: {
                                        valuesCalculatedValueButton: "div.fm-list-header > button.fm-icon-act_calc",
                                        priceMeasureCaption: "ul.fm-lst-measures > li:nth-child(1) > span:nth-child(1)",
                                        priceMeasureAggregation: "ul.fm-lst-measures > li:nth-child(1) > span:nth-child(2)",
                                        quantityMeasure: "ul.fm-lst-measures > li:nth-child(3) > span:nth-child(1)",
                                        formulaMeasure: "ul.fm-lst-measures > li:nth-child(4)",
                                        formulaMeasureCaption: "ul.fm-lst-measures > li:nth-child(4) > span:nth-child(1)"
                                    }
                                }
                            }
                        }

                    }
                },
                pivotGrid: {
                    selector: "div#fm-pivot-view", elements: {
                        configuratorButton: "div.fm-fields-view-wrap button",
                        phoneHierarchy: "div.fm-grid-view > div.fm-compact-view > div.fm-rows-filter > div:nth-child(4) > div"
                    }
                }
            }
}
