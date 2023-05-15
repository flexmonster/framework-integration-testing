let testSuit = {

    runTestSuit: function () {

        const rowHeaders = this.section.headers;
        const rowMembers = this.section.rowMembers;
        const columnMembers = this.section.columnMembers;
        const licensePopup = this.section.licensePopup;
        const filterPopup = this.section.filterPopup;
        const drillThroughPopup = this.section.drillThroughPopup;
        const contextMenu = this.section.contextMenu;
        const numberFormattingPopup = this.section.numberFormattingPopup;
        const conditionalFormattingPopup = this.section.conditionalFormattingPopup;

        describe("Check the grid", () => {
           
           
            it('Check filters pop-up', (client) => {
                client.refresh();
                rowHeaders.waitForElementPresent('css selector',
                    'div#fm-pivot-view div.fm-rows-filter div:nth-child(3) > div.fm-filter-header');
                rowHeaders.expect.element('@countryFilter').to.be.visible;
              
                    client.execute(function () {
                        window.scrollTo({top: 500});
                    })
                    rowHeaders.click('@countryFilter');
                    this.expect.section('@filterPopup').to.be.visible;
                    filterPopup.expect.element('@cancelFilterButton').to.be.visible;
                    filterPopup.expect.element('@cancelFilterButton').text.to.be.equal('CANCEL');
                    filterPopup.click("@cancelFilterButton");
                    this.expect.section('@filterPopup').to.not.be.visible;

            })

            it('Check members filters', () => {
                rowHeaders.expect.element('@countryFilter').to.be.visible;
                rowHeaders.click('@countryFilter');
                this.expect.section('@filterPopup').to.be.visible;
                filterPopup.expect.element('@canadaMemberCheckbox').to.be.visible;
                filterPopup.assert.not.hasClass('@canadaMemberCheckbox', 'fm-selected');
                filterPopup.expect.element('@selectAllMembersCheckbox').to.be.visible;
                filterPopup.assert.hasClass('@selectAllMembersCheckbox', 'fm-ui-semi-selected');
                filterPopup.click('@selectAllMembersCheckbox');
                filterPopup.assert.hasClass('@canadaMemberCheckbox', 'fm-selected');
                filterPopup.assert.hasClass('@selectAllMembersCheckbox', 'fm-selected');
                filterPopup.click("@cancelFilterButton");
            })

            it('Check label filters', () => {
                rowHeaders.expect.element('@countryFilter').to.be.visible;
                rowHeaders.click('@countryFilter');
                this.expect.section('@filterPopup').to.be.visible;
                filterPopup.expect.element('@labelsFilterButton').to.be.visible;
                filterPopup.expect.element('@labelsFilterButton').text.to.be.equal('LABELS');
                filterPopup.click('@labelsFilterButton');
                filterPopup.expect.element('@labelsFilterType').text.to.be.equal('Equal');
                filterPopup.expect.element('@labelsFilterInput').value.to.be.equal('');
                filterPopup.click("@cancelFilterButton");
            })

            xit('Check expands & collapses', (client) => {
                rowMembers.expect.element("@countryJapan").to.be.visible;
                rowMembers.expect.element("@countryJapan").text.to.be.equal("Japan");
                rowMembers.assert.hasClass('@countryJapanExpandArrow', 'fm-expanded-icon');
                client.expect.element('div#fm-pivot-view div.fm-rows-sheet div.fm-scroll-content div:nth-child(2) > div.fm-header-r')
                    .text.to.be.equal("Shipped");
                rowMembers.click("@countryJapan");
                rowMembers.assert.hasClass('@countryJapanExpandArrow', 'fm-collapsed-icon');
                client.expect.element('div#fm-pivot-view div.fm-rows-sheet div.fm-scroll-content div:nth-child(2) > div.fm-header-r')
                    .text.to.be.equal("Australia");
                rowMembers.click("@countryJapan");
                rowMembers.assert.hasClass('@countryJapanExpandArrow', 'fm-expanded-icon');
                client.expect.element('div#fm-pivot-view div.fm-rows-sheet div.fm-scroll-content div:nth-child(2) > div.fm-header-r')
                    .text.to.be.equal("Shipped");
            })

            xit('Check drill-up & drill-down', (client) => {
                this.expect.section('@columnMembers').to.be.visible;
                columnMembers.expect.element('@dateYear2018').to.be.visible;
                columnMembers.expect.element('@dateYear2018').text.to.contain('2018');
                columnMembers.expect.element('@dateYear2018DrillIcon').to.be.visible;
                columnMembers.expect.element('@dateYear2018DrillIcon').text.to.be.equal("Quarter");
                columnMembers.assert.hasClass('@dateYear2018', 'fm-drilled-down');
                client.expect.element('div[data-c="3"][data-r="2"]').text.to.contain('Quarter 3');
                columnMembers.click('@dateYear2018DrillIcon').pause(2);
                client.expect.element('div[data-c="3"][data-r="1"]').text.to.contain('2019');
                columnMembers.assert.hasClass('@dateYear2018', 'fm-drilled-up');
                columnMembers.click('@dateYear2018DrillIcon').pause(2);
                columnMembers.assert.hasClass('@dateYear2018', 'fm-drilled-down');
            });

            it('Drill through a value', (client) => {
                client.doubleClick('div[data-r="4"][data-c="1"]');
                this.expect.section('@drillThroughPopup').to.be.visible;
                drillThroughPopup.expect.element('@drillThroughTitle').text.to.be.equal("Details");
                drillThroughPopup.click('@drillThroughCloseButton');
            })

            it('Sort rows', (client) => {
                client.expect.element('div[data-r="4"][data-c="1"]').text.to.contain('$5 761');
                rowMembers.click('@countryJapanSortingArrow');
                client.expect.element('div[data-r="4"][data-c="1"]').text.to.contain('$8 167');
            })

            it('Check header context menu', (client) => {
                try {
                    rowMembers.rightClick("@countryJapan");
                    this.expect.section('@contextMenu').to.be.visible;
                    contextMenu.expect.element('@contextMenuRow1').text.to.be.equal("Collapse");
                    contextMenu.expect.element('@contextMenuRow2').text.to.be.equal("Sort row ascending");
                    contextMenu.expect.element('@contextMenuRow3').text.to.be.equal("Clear sorting");
                    contextMenu.expect.element('@contextMenuRow4').text.to.be.equal("Filter by Japan");
                    contextMenu.expect.element('@contextMenuRow5').text.to.be.equal("Exclude Japan");
                    contextMenu.click('@contextMenuRow3');
                    client.expect.element('div[data-r="4"][data-c="1"]').text.to.contain('$5 761');
                } catch (e) {
                    rowMembers.rightClick("@countryJapan");
                    this.expect.section('@contextMenu').to.be.visible;
                    contextMenu.expect.element('@contextMenuRow1').text.to.be.equal("Collapse");
                    contextMenu.expect.element('@contextMenuRow2').text.to.be.equal("Sort row ascending");
                    contextMenu.expect.element('@contextMenuRow3').text.to.be.equal("Clear sorting");
                    contextMenu.expect.element('@contextMenuRow4').text.to.be.equal("Filter by Japan");
                    contextMenu.expect.element('@contextMenuRow5').text.to.be.equal("Exclude Japan");
                    contextMenu.click('@contextMenuRow3');
                    client.expect.element('div[data-r="4"][data-c="1"]').text.to.contain('$5 761');

                }
            })

            it('Check value context menu', (client) => {
                client.rightClick('css selector', 'div[data-r="4"][data-c="1"]');
                this.expect.section('@contextMenu').to.be.visible;
                contextMenu.expect.element('@contextMenuRow1').text.to.be.equal("Drill through");
                contextMenu.expect.element('@contextMenuRow2').text.to.be.equal("Aggregation");
                contextMenu.expect.element('@contextMenuRow3').text.to.be.equal("Number formatting");
                contextMenu.expect.element('@contextMenuRow4').text.to.be.equal("Conditional formatting");
                contextMenu.expect.element('@contextMenuRow5').text.to.be.equal("Remove measure");
            })

            it('Check Number formatting pop-up from context menu', (client) => {
                client.rightClick('css selector', 'div[data-r="4"][data-c="1"]');
                this.expect.section('@contextMenu').to.be.visible;
                contextMenu.click('@contextMenuRow3');
                this.expect.section('@numberFormattingPopup').to.be.visible;
                numberFormattingPopup.click('@numberFormattingCancelButton');
                this.expect.section('@numberFormattingPopup').to.not.be.present;
            })

            it('Check number formatting performance', (client) => {
                client.rightClick('css selector', 'div[data-r="4"][data-c="1"]');
                this.expect.section('@contextMenu').to.be.visible;
                contextMenu.click('@contextMenuRow3');
                this.expect.section('@numberFormattingPopup').to.be.visible;
                numberFormattingPopup.expect
                    .element('@thousandsSeparatorLabel').text.to.be.equal("Thousands separator");
                numberFormattingPopup.expect.element('@thousandsSeparatorDropdownButton').text.to.be.equal('(Space)');
                numberFormattingPopup.click('@thousandsSeparatorDropdownButton');
                numberFormattingPopup.expect.element('@thousandsSeparatorComma').text.to.be.equal(',');
                numberFormattingPopup.click('@thousandsSeparatorComma');
                numberFormattingPopup.click('@numberFormattingApplyButton');
                client.waitForElementNotPresent('css selector', '#fm-toolbar-wrapper  .fm-popup-format-cells');
                client.expect.element('div[data-r="4"][data-c="1"]').text.to.contain('$5,761');
            })

            it('Check Conditional formatting pop-up from context menu', (client) => {
                client.rightClick('css selector', 'div[data-r="4"][data-c="1"]');
                this.expect.section('@contextMenu').to.be.visible;
                contextMenu.click('@contextMenuRow4');
                this.expect.section('@conditionalFormattingPopup').to.be.visible;
                conditionalFormattingPopup.click('@conditionalFormattingCancelButton');
                this.expect.section('@conditionalFormattingPopup').to.not.be.present;
            })

            it('Check Conditional formatting performance', (client) => {
                client.assert.cssProperty('div[data-r="4"][data-c="2"]', "background-color", "rgba(0, 164, 90, 1)");
                client.rightClick('css selector', 'div[data-r="4"][data-c="1"]');
                this.expect.section('@contextMenu').to.be.visible;
                contextMenu.click('@contextMenuRow4');
                this.expect.section('@conditionalFormattingPopup').to.be.visible;
                conditionalFormattingPopup.click('@deleteFirstConditionButton');
                conditionalFormattingPopup.click('@conditionalFormattingApplyButton');
                this.expect.section('@conditionalFormattingPopup').to.not.be.present;
                client.assert.not.cssProperty('div[data-r="4"][data-c="2"]', "background-color", "rgba(0, 164, 90, 1)");
            })

            it('Apply filter', (client) => {
                rowHeaders.expect.element('@countryFilter').to.be.visible;
                rowHeaders.click('@countryFilter');
                this.expect.section('@filterPopup').to.be.visible;
                filterPopup.expect.element('@valuesFilterButton').to.be.visible;
                filterPopup.expect.element('@valuesFilterButton').text.to.be.equal('VALUES');
                filterPopup.click('@valuesFilterButton');
                filterPopup.expect.element('@valuesFilterAggregation').text.to.be.equal("Sum of Price");
                filterPopup.expect.element('@valuesFilterType').text.to.be.equal("Top");
                filterPopup.expect.element('@valuesFilterInput').value.to.be.equal("10");
                filterPopup.expect.element('@applyFilterButton').to.be.visible;
                filterPopup.expect.element('@applyFilterButton').text.to.be.equal('APPLY');
                filterPopup.click('@applyFilterButton');
                client.expect.element('div[data-c="0"][data-r="20"]').to.be.present;
            })

            xit('Check license pop-up CTRL+ALT+I ', (client) => {
                this.expect.section("@rowMembers").to.be.visible;
                rowMembers.expect.element("@countryJapan").to.be.visible;
                rowMembers.expect.element("@countryJapan").text.to.be.equal("Japan");
                rowMembers.click("@countryJapan");
                client.perform(function () {
                    const actions = this.actions({ async: true });

                    return actions
                        .keyDown(client.Keys.CONTROL)
                        .keyUp(client.Keys.CONTROL)
                        .keyDown(client.Keys.ALT)
                        .keyUp(client.Keys.ALT);
                }).pause(6000);

                client.keys([client.Keys.CONTROL, client.Keys.ALT, "i"]);
                licensePopup.expect.element('@licenseText').text.to.contain('License key')
            });

            xit('Refresh page to remove changes on the grid', (client) => {
                client.refresh();
            })
        });
    }
}

module.exports = {
    commands: [testSuit],
    sections: {
        headers: {
            selector: "div#fm-pivot-view div.fm-rows-filter",
            elements: {
                countryFilter: "div:nth-child(3) > div.fm-filter-header"
            }
        },
        contextMenu: {
            selector: "div#fm-pivot-view div.fm-context-menu",
            elements: {
                contextMenuRow1: "ul > li:nth-child(1) > span",
                contextMenuRow2: "ul > li:nth-child(2) > span",
                contextMenuRow3: "ul > li:nth-child(3) > span",
                contextMenuRow4: "ul > li:nth-child(4) > span",
                contextMenuRow5: "ul > li:nth-child(5) > span"
            }
        },
        columnMembers: {
            selector: "div#fm-pivot-view div.fm-cols-sheet div.fm-scroll-content",
            elements: {
                dateYear2018: "div:nth-child(3) > div",
                dateYear2018DrillIcon: "div:nth-child(3) span.fm-hierarchy-link"
            }
        },
        rowMembers: {
            selector: "div#fm-pivot-view div.fm-rows-sheet div.fm-scroll-content",
            elements: {
                countryJapan: "div:nth-child(1) > div.fm-header-r",
                countryJapanExpandArrow: "div:nth-child(1) > div.fm-level-0 i:nth-child(1)",
                countryJapanSortingArrow: "div:nth-child(1) > div.fm-level-0 i:nth-child(2)"
            }
        },
        filterPopup: {
            selector: 'div#fm-pivot-view div.fm-filter-view',
            elements: {
                applyFilterButton: "div.fm-popup-header div.fm-ui-btns-row button:nth-child(1)",
                cancelFilterButton: "div.fm-popup-header div.fm-ui-btns-row button:nth-child(2)",
                labelsFilterButton: "div.fm-filters-col button.fm-labels-filter-btn",
                labelsFilterType: "div.fm-labels-filter-view .fm-conditions-dropdown > a",
                labelsFilterInput: "div.fm-labels-filter-view input",
                valuesFilterButton: "div.fm-filters-col button.fm-values-filter-btn",
                valuesFilterAggregation: 'div.fm-values-filter-view div.fm-measures-dropdown span',
                valuesFilterType: 'div.fm-values-filter-view div.fm-conditions-dropdown span',
                valuesFilterInput: 'div.fm-values-filter-view input',
                selectAllMembersCheckbox: "div.fm-filters-table a.fm-select-all-label",
                canadaMemberCheckbox: "div.fm-filters-table ul.fm-ui-list li:nth-child(2) a.fm-ui-checkbox",
            }
        },
        licensePopup: {
            selector: "div#fm-pivot-view div.fm-alert-view",
            elements: {
                licenseText: "div.fm-content span:nth-child(2)"
            }
        },
        drillThroughPopup: {
            selector: "div#fm-pivot-view div.fm-drillthrough-view",
            elements: {
                drillThroughTitle: "span.fm-popup-title",
                drillThroughCloseButton: "button.fm-ui-btn-close"
            }
        },
        numberFormattingPopup: {
            selector: 'div#fm-toolbar-wrapper  div.fm-popup-format-cells',
            elements: {
                numberFormattingApplyButton: '#fm-btn-apply',
                numberFormattingCancelButton: '#fm-btn-cancel',
                thousandsSeparatorLabel: "div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > label",
                thousandsSeparatorDropdownButton: "div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div.fm-ui-dropdown > a",
                thousandsSeparatorComma: "div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div.fm-ui-dropdown ul > li:nth-child(3)",
                currencySymbolInput: 'div.fm-panel-content > div:nth-child(3) > div:nth-child(2) > div:nth-child(5) > input'
            }
        },
        conditionalFormattingPopup: {
            selector: 'div#fm-toolbar-wrapper  div.fm-popup-conditional',
            elements: {
                conditionalFormattingApplyButton: '#fm-btn-apply',
                conditionalFormattingCancelButton: '#fm-btn-cancel',
                deleteFirstConditionButton: 'div.fm-popup-content > div:nth-child(2) a.fm-cr-delete'
            }
        }
    }
}
