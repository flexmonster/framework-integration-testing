let testSuit = {

    runTestSuit: function () {

        const calculatedValuesPopup = this.section.calculatedValuesPopup;
        const fieldList = this.section.fieldList;
        const pivotGrid = this.section.pivotGrid;
        const fieldListContent = this.section.fieldList.section.fieldListContent;


            it('Adding field to rows', (client) => {
                //opening the FieldList
                client.refresh().pause(100);
                pivotGrid.waitForElementVisible('@configuratorButton');
                pivotGrid.expect.element('@configuratorButton').to.be.visible;

                pivotGrid.click('@configuratorButton');
                //  client.waitForElementVisible('css selector', 'div.fm-ui-window:nth-child(2)');
                this.expect.section('@fieldList').to.be.visible;

                fieldListContent.expect.section('@hierarchiesList').to.be.visible;
                fieldListContent.section.hierarchiesList.expect.element('@phoneField').to.be.visible;
                fieldListContent.section.hierarchiesList
                    .expect.element('@phoneFieldCaption').text.to.be.equal("Phone");
                fieldListContent.section.hierarchiesList.click('@phoneField');
                fieldListContent.section.rowsList.expect.element("@phoneInRows").to.be.visible;
                fieldListContent.section.rowsList.expect.element("@phoneInRows").text.to.be.equal("Phone");

            });

            it('Adding measure to values', () => {
                fieldListContent.expect.section('@hierarchiesList').to.be.visible;
                fieldListContent.section.hierarchiesList.expect.element('@quantityField').to.be.visible;
                fieldListContent.section.hierarchiesList
                    .expect.element('@quantityFieldCaption').text.to.be.equal("Quantity");
                fieldListContent.section.hierarchiesList.click('@quantityField');
                fieldListContent.section.measuresList.expect.element("@quantityMeasure").to.be.visible;
                fieldListContent.section.measuresList
                    .expect.element("@quantityMeasure").text.to.be.equal("Sum of Quantity");
            });

            it('Applying changes in Field List', (client) => {
                fieldList.section.fieldListHeader.click("@fieldsApplyButton");
                client.waitForElementPresent("css selector", ".fm-level-2")
                pivotGrid.expect.element("@phoneHierarchy").text.to.be.equal("PHONE");
            });

            it('Opening the drop-down', (client) => {
                //opening the FieldList
                try {
                    pivotGrid.expect.element('@configuratorButton').to.be.visible;
                    pivotGrid.pause(10);
                    pivotGrid.click('@configuratorButton');
                    client.waitForElementVisible('css selector',
                        'div.fm-ui-window:nth-child(2)');
                    this.expect.section('@fieldList').to.be.visible;

                    fieldListContent.section.hierarchiesList.expect.element('@locationField').to.be.visible;
                    fieldListContent.section.hierarchiesList
                        .expect.element('@locationFieldCaption').text.to.be.equal("Location");
                    fieldListContent.section.hierarchiesList.click('@locationField');
                    fieldListContent.section.hierarchiesList
                        .expect.element('@cityFieldCaption').text.to.be.equal("City");
                    fieldListContent.section.hierarchiesList
                        .expect.element('@countryFieldCaption').text.to.be.equal("Country");
                } catch (e) {
                    pivotGrid.expect.element('@configuratorButton').to.be.visible;
                    pivotGrid.click('@configuratorButton').pause(10);

                    fieldListContent.section.hierarchiesList.expect.element('@locationField').to.be.visible;
                    fieldListContent.section.hierarchiesList
                        .expect.element('@locationFieldCaption').text.to.be.equal("Location");
                    fieldListContent.section.hierarchiesList.click('@locationField');
                    fieldListContent.section.hierarchiesList
                        .expect.element('@cityFieldCaption').text.to.be.equal("City");
                    fieldListContent.section.hierarchiesList
                        .expect.element('@countryFieldCaption').text.to.be.equal("Country");
                }
            });

            it('Adding calculated value with formula', (client) => {
                fieldList.section.fieldListHeader.click('@fieldsCalculatedValueButton');
                this.expect.section("@calculatedValuesPopup").to.be.visible;
                const calculatedFormulaName = "formula";
                calculatedValuesPopup.doubleClick('@calcValCityField');
                client.setValue('input.fm-ui-element:nth-child(1)', calculatedFormulaName);
                calculatedValuesPopup.waitForElementVisible("@applyCalcValPopupButton")
                    .click("@applyCalcValPopupButton");
                client.waitForElementPresent('css selector', 'li.fm-selected:nth-child(4)');
                fieldListContent.section.measuresList
                    .expect.element('@formulaMeasureCaption').text.to.be.equal(calculatedFormulaName);
                fieldList.section.fieldListHeader.click("@fieldsCancelButton");
            });

            it('Refresh page to remove changes on the grid', (client) => {
                client.refresh();
            })
    }
}

module.exports = {
    commands: [testSuit],
    sections: {
        calculatedValuesPopup: {
            selector: "div.fm-calculated-view", elements: {
                applyCalcValPopupButton: "div.fm-popup-header > div.fm-ui-btns-row > button.fm-ui-btn-dark",
                formulaTextarea: "div.fm-popup-content > div.fm-formula-wrap > textarea",
                calcValCityField: "ul.fm-lst-measures > li:nth-child(1)",
                calculatedValueTitle: "div.fm-popup-header span.fm-popup-title"
            }
        },
        fieldList: {
            selector: "div.fm-fields-opened > div.fm-pivot-fields",
            sections: {
                fieldListHeader: {
                    selector: "div.fm-popup-header", elements: {
                        fieldsCalculatedValueButton: "div.fm-ui-btns-row button.fm-btn-add-measure",
                        fieldsApplyButton: "div.fm-ui-btns-row button.fm-ui-btn-dark",
                        fieldsCancelButton: "div.fm-ui-btns-row button:not(.fm-btn-add-measure):not(.fm-ui-btn-dark)"
                    }
                }, fieldListContent: {
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
            selector: "div#fm-pivot-view",
            elements: {
                configuratorButton: "div.fm-fields-view-wrap button",
                phoneHierarchy: "div.fm-grid-view > div.fm-compact-view > div.fm-rows-filter > div:nth-child(4) > div"
            }
        }
    }
}
