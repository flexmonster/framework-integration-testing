describe('check Flexmonster Toolbar', () => {
    before((client) => {
        this.homepage = client.page.homepage();
        this.pivotExample = this.homepage.section.mainContainer.section.pivotExample;
        this.toolbar = this.pivotExample.section.toolbar;
        this.leftGroup = this.toolbar.section.leftGroup;
        this.rightGroup = this.toolbar.section.rightGroup;
        this.pivotGrid = this.pivotExample.section.pivotGrid;
        this.homepage.navigate();
    });

    //left button group

    it('Check connect tab', () => {
        this.leftGroup.expect.element('@connectTab').to.be.visible;
        this.leftGroup.expect.element('@connectTabText').text.to.be.equal("Connect");
    });

    it('Check open tab', () => {
        this.leftGroup.expect.element('@openTab').to.be.visible;
        this.leftGroup.expect.element('@openTabText').text.to.be.equal("Open");
    });

    it('Check save tab', () => {
        this.leftGroup.expect.element('@saveTab').to.be.visible;
        this.leftGroup.click('@saveTab');
        this.pivotExample.expect.section('@popup').to.be.visible;
        this.pivotExample.section.popup.expect.element("@popupTitle").text.to.be.equal('Confirmation');
        this.pivotExample.section.popup.expect.element("@popupActionButton").text.to.be.equal('SAVE');
        this.pivotExample.section.popup.expect.element("@popupCancelButton").text.to.be.equal('CANCEL');
        this.pivotExample.section.popup.click("@popupCancelButton");
    });

    it('Check export tab', () => {
        this.leftGroup.expect.element('@exportTab').to.be.visible;
        this.leftGroup.expect.element('@exportTabText').text.to.be.equal("Export");
    });

    it('Check share tab', () => {
        this.leftGroup.expect.element('@shareTab').to.be.visible;
        this.leftGroup.expect.element('@shareTabText').text.to.be.equal("Share");
        this.leftGroup.click('@shareTab');
        this.pivotExample.expect.section('@popup').to.be.visible;
        this.pivotExample.section.popup.expect.element("@popupTitle").text.to.be.equal('Confirmation');
        this.pivotExample.section.popup.expect.element("@popupActionButton").text.to.be.equal('COPY');
        this.pivotExample.section.popup.expect.element("@popupCancelButton").text.to.be.equal('CANCEL');
        this.pivotExample.section.popup.click("@popupCancelButton");
    });

    it('Check grid tab', () => {
        this.leftGroup.expect.element('@gridTab').to.be.visible;
        this.leftGroup.expect.element('@gridTabText').text.to.be.equal("Grid");
        this.leftGroup.click("@gridTab");
    });

    it('Check charts tab', () => {
        this.leftGroup.expect.element('@chartsTab').to.be.visible;
        this.leftGroup.expect.element('@chartsTabText').text.to.be.equal("Charts");
    });


    //Right button group

    it('Check format tab', () => {
        this.rightGroup.expect.element('@formatTab').to.be.visible;
        this.rightGroup.expect.element('@formatTabText').text.to.be.equal("Format");
    });

    it('Check options tab', () => {
        this.rightGroup.expect.element('@optionsTab').to.be.visible;
        this.rightGroup.expect.element('@optionsTabText').text.to.be.equal("Options");
        this.rightGroup.click('@optionsTab');
        this.pivotExample.expect.section('@toolbarOptionsPopup').to.be.visible;
        this.pivotExample.section.toolbarOptionsPopup.expect.element("@optionsTitle").text.to.be.equal('Layout options');
        this.pivotExample.section.toolbarOptionsPopup.expect.element("@optionsApplyButton").text.to.be.equal('APPLY');
        this.pivotExample.section.toolbarOptionsPopup.expect.element("@optionsCancelButton").text.to.be.equal('CANCEL');
        this.pivotExample.section.toolbarOptionsPopup.click("@optionsApplyButton");
    });

    it('Check fields tab', () => {
        this.rightGroup.expect.element('@fieldsTab').to.be.visible;
        this.rightGroup.expect.element('@fieldsTabText').text.to.be.equal("Fields");
        this.rightGroup.click('@fieldsTab');
        this.pivotExample.expect.section('@toolbarFieldsPopup').to.be.visible;
        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsTitle").text.to.be.equal('Fields');
        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsCalculatedValueButton").text.to.be.equal('Add calculated value');
        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsApplyButton").text.to.be.equal('APPLY');
        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsCancelButton").text.to.be.equal('CANCEL');
        this.pivotExample.section.toolbarFieldsPopup.click('@fieldsCancelButton')

    });

    it('Check fields configurator button', () => {
        this.pivotGrid.expect.element('@configuratorButton').to.be.visible;
        this.pivotGrid.click('@configuratorButton');
        this.pivotExample.expect.section('@toolbarFieldsPopup').to.be.visible;
        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsTitle").text.to.be.equal('Fields');
        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsCalculatedValueButton").text.to.be.equal('Add calculated value');
        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsApplyButton").text.to.be.equal('APPLY');
        this.pivotExample.section.toolbarFieldsPopup.expect.element("@fieldsCancelButton").text.to.be.equal('CANCEL');
        this.pivotExample.section.toolbarFieldsPopup.click('@fieldsCancelButton')
    });

    it('Check fullscreen tab', () => {
        this.rightGroup.expect.element('@fullscreenTab').to.be.visible;
        this.rightGroup.expect.element('@fullscreenTabText').text.to.be.equal("Fullscreen");
        this.rightGroup.click('@fullscreenTab').waitForElementVisible("css selector","#fm-tab-fullscreen");
        this.rightGroup.expect.element('@fullscreenTab').to.be.visible;
        this.rightGroup.expect.element('@fullscreenTabText').text.to.be.equal("Minimize");
        this.rightGroup.click('@fullscreenTab')
    });
    after(client => client.end());
});

