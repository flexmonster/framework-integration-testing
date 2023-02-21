let testSuit = {

    runTestSuit: function () {

        const toolbar = this.section.toolbar;

        const pivotGrid = this.section.pivotGrid;
        const toolbarOptionsPopup = this.section.toolbarOptionsPopup;
        const popup = this.section.popup;
        const FieldList = this.section.FieldList;

        describe("Check the Toolbar", () => {

            //left button group
            it('Check connect tab', (client) => {
                client.execute(function () {
                    window.scrollTo({top: 300});
                }, []);
                this.expect.section('@toolbar').to.be.visible;

                toolbar.expect.element('@connectTab').to.be.visible;
                toolbar.expect.element('@connectTabText').text.to.be.equal("Connect");
            });

            it('Check open tab', () => {
                toolbar.expect.element('@openTab').to.be.visible;
                toolbar.expect.element('@openTabText').text.to.be.equal("Open");
            });

            it('Check save tab', (client) => {
                toolbar.expect.element('@saveTab').to.be.visible;
                toolbar.click('@saveTab');
                this.expect.section('@popup').to.be.visible;
                popup.expect.element("@popupTitle").text.to.be.equal('Confirmation');
                popup.expect.element("@popupActionButton").text.to.be.equal('SAVE');
                popup.expect.element("@popupCancelButton").text.to.be.equal('CANCEL');
                popup.click("@popupCancelButton");
            });

            it('Check export tab', () => {
                toolbar.expect.element('@exportTab').to.be.visible;
                toolbar.expect.element('@exportTabText').text.to.be.equal("Export");
            });

            it('Check share tab', (client) => {
                toolbar.expect.element('@shareTab').to.be.visible;
                toolbar.expect.element('@shareTabText').text.to.be.equal("Share");
                toolbar.click('@shareTab');
                this.expect.section('@popup').to.be.visible;
                popup.expect.element("@popupTitle").text.to.be.equal('Confirmation');
                popup.expect.element("@popupActionButton").text.to.be.equal('COPY');
                popup.expect.element("@popupCancelButton").text.to.be.equal('CANCEL');
                popup.click("@popupCancelButton");
            });

            it('Check grid tab', () => {
                toolbar.expect.element('@gridTab').to.be.visible;
                toolbar.expect.element('@gridTabText').text.to.be.equal("Grid");
                toolbar.click("@gridTab");
            });

            it('Check charts tab', () => {
                toolbar.expect.element('@chartsTab').to.be.visible;
                toolbar.expect.element('@chartsTabText').text.to.be.equal("Charts");
            });


            //Right button group

            it('Check format tab', () => {
                toolbar.expect.element('@formatTab').to.be.visible;
                toolbar.expect.element('@formatTabText').text.to.be.equal("Format");
            });

            it('Check options tab', () => {
                toolbar.expect.element('@optionsTab').to.be.visible;
                toolbar.expect.element('@optionsTabText').text.to.be.equal("Options");
                toolbar.click('@optionsTab');
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
                toolbar.expect.element('@fieldsTab').to.be.visible;
                toolbar.expect.element('@fieldsTabText').text.to.be.equal("Fields");
                toolbar.click('@fieldsTab');
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
                toolbar.expect.element('@fullscreenTab').to.be.visible;
                toolbar.expect.element('@fullscreenTabText').text.to.be.equal("Fullscreen");
                toolbar.click('@fullscreenTab')
                    .waitForElementVisible("css selector", "#fm-tab-fullscreen");
                client.pause(5);
                toolbar.expect.element('@fullscreenTab').to.be.visible;
                toolbar.expect.element('@fullscreenTabText').text.to.be.equal("Minimize");
                toolbar.click('@fullscreenTab')
            });

        });
    }
}

module.exports = {
    commands: [testSuit], sections: {
        toolbar: {
            selector: "ul#fm-toolbar",
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
                chartsTabText: "li#fm-tab-charts > a> span",

                formatTab: "li#fm-tab-format > a",
                formatTabText: "li#fm-tab-format > a > span",
                optionsTab: "li#fm-tab-options > a",
                optionsTabText: "li#fm-tab-options > a > span",
                fieldsTab: "li#fm-tab-fields > a",
                fieldsTabText: "li#fm-tab-fields > a > span",
                fullscreenTab: "li#fm-tab-fullscreen > a",
                fullscreenTabText: "li#fm-tab-fullscreen > a > span"
            }
        }, toolbarOptionsPopup: {
            selector: "div#fm-toolbar-wrapper > div.fm-popup-options", elements: {
                optionsTitle: "div#fm-popup-title-text",
                optionsApplyButton: "button#fm-btn-apply",
                optionsCancelButton: "button#fm-btn-cancel",
            }
        }, popup: {
            selector: "div > div > div#fm-pivot-view > div.fm-ui-popup.fm-alert-view", elements: {
                popupTitle: "div.fm-content > span.fm-popup-title",
                popupBody: "div.fm-content > span:nth-child(2)",
                popupActionButton: "div.fm-content > div.fm-ui-btns-row > button:nth-child(1)",
                popupCancelButton: "div.fm-content > div.fm-ui-btns-row > button:nth-child(2)"
            }
        }, FieldList: {
            selector: "div.fm-fields-opened > div.fm-pivot-fields", elements: {
                fieldsTitle: "span.fm-popup-title",
                fieldsCalculatedValueButton: "div.fm-popup-header > div.fm-ui-btns-row button:nth-child(1)",
                fieldsApplyButton: "div.fm-popup-header > div.fm-ui-btns-row button:nth-child(2)",
                fieldsCancelButton: "div.fm-popup-header > div.fm-ui-btns-row button:nth-child(3)"
            }
        }, pivotGrid: {
            selector: "div#fm-pivot-view", elements: {
                configuratorButton: "div.fm-fields-view-wrap button"
            }
        }
    }

}
