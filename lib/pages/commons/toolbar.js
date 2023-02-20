let testSuit = {

    runTestSuit: function () {

        const toolbar = this.section.toolbar;

        const leftGroup = toolbar.section.leftGroup;
        const rightGroup = toolbar.section.rightGroup;
        const pivotGrid = this.section.pivotGrid;
        const toolbarOptionsPopup = this.section.toolbarOptionsPopup;
        const popup = this.section.popup;
        const FieldList = this.section.FieldList;

        describe("Check the Toolbar", () => {

            //left button group
            it('Check connect tab', (client) => {
                this.expect.section('@toolbar').to.be.visible;
                client.execute(function () {
                    window.scrollTo({top: 300});
                }, []);
                this.expect.section('@toolbar').to.be.visible;
                leftGroup.expect.element('@connectTab').to.be.visible;
                leftGroup.expect.element('@connectTabText').text.to.be.equal("Connect");
            });

            it('Check open tab', () => {
                leftGroup.expect.element('@openTab').to.be.visible;
                leftGroup.expect.element('@openTabText').text.to.be.equal("Open");
            });

            it('Check save tab', (client) => {
                leftGroup.expect.element('@saveTab').to.be.visible;
                leftGroup.click('@saveTab');
                this.expect.section('@popup').to.be.visible;
                popup.expect.element("@popupTitle").text.to.be.equal('Confirmation');
                popup.expect.element("@popupActionButton").text.to.be.equal('SAVE');
                popup.expect.element("@popupCancelButton").text.to.be.equal('CANCEL');
                popup.click("@popupCancelButton");
            });

            it('Check export tab', () => {
                leftGroup.expect.element('@exportTab').to.be.visible;
                leftGroup.expect.element('@exportTabText').text.to.be.equal("Export");
            });

            it('Check share tab', (client) => {
                leftGroup.expect.element('@shareTab').to.be.visible;
                leftGroup.expect.element('@shareTabText').text.to.be.equal("Share");
                leftGroup.click('@shareTab');
                this.expect.section('@popup').to.be.visible;
                popup.expect.element("@popupTitle").text.to.be.equal('Confirmation');
                popup.expect.element("@popupActionButton").text.to.be.equal('COPY');
                popup.expect.element("@popupCancelButton").text.to.be.equal('CANCEL');
                popup.click("@popupCancelButton");
            });

            it('Check grid tab', () => {
                leftGroup.expect.element('@gridTab').to.be.visible;
                leftGroup.expect.element('@gridTabText').text.to.be.equal("Grid");
                leftGroup.click("@gridTab");
            });

            it('Check charts tab', () => {
                leftGroup.expect.element('@chartsTab').to.be.visible;
                leftGroup.expect.element('@chartsTabText').text.to.be.equal("Charts");
            });


            //Right button group

            it('Check format tab', () => {
                rightGroup.expect.element('@formatTab').to.be.visible;
                rightGroup.expect.element('@formatTabText').text.to.be.equal("Format");
            });

            it('Check options tab', () => {
                rightGroup.expect.element('@optionsTab').to.be.visible;
                rightGroup.expect.element('@optionsTabText').text.to.be.equal("Options");
                rightGroup.click('@optionsTab');
                this.expect.section('@toolbarOptionsPopup').to.be.visible;
                toolbarOptionsPopup
                    .expect.element("@optionsTitle").text.to.be.equal('Layout options');
                toolbarOptionsPopup
                    .expect.element("@optionsApplyButton").text.to.be.equal('APPLY');
                toolbarOptionsPopup
                    .expect.element("@optionsCancelButton").text.to.be.equal('CANCEL');
                toolbarOptionsPopup.click("@optionsApplyButton");
            });

            it('Check fields tab', () => {
                rightGroup.expect.element('@fieldsTab').to.be.visible;
                rightGroup.expect.element('@fieldsTabText').text.to.be.equal("Fields");
                rightGroup.click('@fieldsTab');
                this.expect.section('@FieldList').to.be.visible;
                FieldList.expect.element("@fieldsTitle").text.to.be.equal('Fields');
                FieldList
                    .expect.element("@fieldsCalculatedValueButton").text.to.be.equal('Add calculated value');
                FieldList.expect.element("@fieldsApplyButton").text.to.be.equal('APPLY');
                FieldList.expect.element("@fieldsCancelButton").text.to.be.equal('CANCEL');
                FieldList.click('@fieldsCancelButton')
            });

            it('Check fields configurator button', () => {
                pivotGrid.expect.element('@configuratorButton').to.be.visible;
                pivotGrid.click('@configuratorButton');
                this.expect.section('@FieldList').to.be.visible;
                FieldList.expect.element("@fieldsTitle").text.to.be.equal('Fields');
                FieldList
                    .expect.element("@fieldsCalculatedValueButton").text.to.be.equal('Add calculated value');
                FieldList.expect.element("@fieldsApplyButton").text.to.be.equal('APPLY');
                FieldList.expect.element("@fieldsCancelButton").text.to.be.equal('CANCEL');
                FieldList.click('@fieldsCancelButton')
            });

            it('Check fullscreen tab', (client) => {
                rightGroup.expect.element('@fullscreenTab').to.be.visible;
                rightGroup.expect.element('@fullscreenTabText').text.to.be.equal("Fullscreen");
                rightGroup.click('@fullscreenTab')
                    .waitForElementVisible("css selector","#fm-tab-fullscreen");
                client.pause(5);
                rightGroup.expect.element('@fullscreenTab').to.be.visible;
                rightGroup.expect.element('@fullscreenTabText').text.to.be.equal("Minimize");
                rightGroup.click('@fullscreenTab')
            });

        });
    }
}

module.exports = {
    commands: [testSuit],
    sections: {
        toolbar: {
            selector: "div#fm-toolbar-wrapper > div.fm-list-wrapper > ul#fm-toolbar",
            sections: {
                leftGroup: {
                    selector: "div.fm-toolbar-group-left",
                    elements: {
                        connectTab: "li#fm-tab-connect > a",
                        connectTabText: "li#fm-tab-connect > a > span",
                        openTab: "li#fm-tab-open > a",
                        openTabText: "li#fm-tab-open > a > span",
                        saveTab: "li#fm-tab-save > a",
                        saveTabText: "li#fm-tab-save > a > span",
                        exportTab: "li#fm-tab-export > a",
                        exportTabText: "li#fm-tab-export > a > span",
                        shareTab: "li#fm-tab-share > a",
                        shareTabText: "li#fm-tab-share > a > span",
                        gridTab: "li#fm-tab-grid > a",
                        gridTabText: "li#fm-tab-grid > a> span",
                        chartsTab: "li#fm-tab-charts > a",
                        chartsTabText: "li#fm-tab-charts > a> span"
                    }
                },
                rightGroup: {
                    selector: "div.fm-toolbar-group-right",
                    elements: {
                        formatTab: "li#fm-tab-format > a",
                        formatTabText: "li#fm-tab-format > a > span",
                        optionsTab: "li#fm-tab-options > a",
                        optionsTabText: "li#fm-tab-options > a > span",
                        fieldsTab: "li#fm-tab-fields > a",
                        fieldsTabText: "li#fm-tab-fields > a > span",
                        fullscreenTab: "li#fm-tab-fullscreen > a",
                        fullscreenTabText: "li#fm-tab-fullscreen > a > span"
                    },
                }
            }
        },
        toolbarOptionsPopup: {
            selector: "div#fm-toolbar-wrapper > div.fm-popup-options",
            elements: {
                optionsTitle: "div#fm-popup-title-text",
                optionsApplyButton: "button#fm-btn-apply",
                optionsCancelButton: "button#fm-btn-cancel",
            }
        },
        popup: {
            selector: "div > div > div#fm-pivot-view > div.fm-ui-popup.fm-alert-view",
            elements: {
                popupTitle: "div.fm-content > span.fm-popup-title",
                popupBody: "div.fm-content > span:nth-child(2)",
                popupActionButton: "div.fm-content > div.fm-ui-btns-row > button:nth-child(1)",
                popupCancelButton: "div.fm-content > div.fm-ui-btns-row > button:nth-child(2)"
            }
        },
        FieldList: {
            selector: "div.fm-fields-opened > div.fm-pivot-fields",
            elements: {
                fieldsTitle: "span.fm-popup-title",
                fieldsCalculatedValueButton: "div.fm-popup-header > div.fm-ui-btns-row button:nth-child(1)",
                fieldsApplyButton: "div.fm-popup-header > div.fm-ui-btns-row button:nth-child(2)",
                fieldsCancelButton: "div.fm-popup-header > div.fm-ui-btns-row button:nth-child(3)"
            }
        },
        pivotGrid: {
            selector: "div#fm-pivot-view",
            elements: {
                configuratorButton: "div.fm-fields-view-wrap button"
            }
        }
    }

}
